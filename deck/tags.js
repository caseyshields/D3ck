/** A Search component provides a way to filter and order articles. 
 * The markup looks like;
```html
<nav>
    <div><span> ${tags[n]} </span></div>
    <!-- div created for each unique tag in the dataset -->
</nav>
```
*/
export default function(deck, selection) {

    let switches = selection.selectAll('.switch');
    let ands = [];

    function tags(data) {

        selection.datum( data );

        // find all unique keys and count their occurances, only including items with one of the selected tags
        let counts = [];
        data.forEach(item => {
            let ignored = !filter(item);
            item.tags.forEach( (tag) => {
                if (counts[tag]==undefined)
                    counts[tag] = 0;
                if (!ignored)
                    counts[tag]++;
            });
        });
        
        // convert them to an array D3 can use
        let key = []
        for (let tag in counts)
            key.push( {tag, count:counts[tag]} );

        // D3 General Update Pattern applied to tag switches
        switches = switches//selection.selectAll('.switch')
            .data(key, function(d) {
                return !d ? 'dummy' : d.tag;}
            );
        switches.exit().remove();
        let newswitches = switches.enter()
            .append('div')
            .classed('switch', true)
            .classed('or', true)
            .on( 'click', toggle )
            .html( d => d.tag );
        switches = newswitches.merge(switches)
            .style( 'display', function(item) {
                return (item.count>0) ? null : 'none';
            });
            // .attr('class', function(item) {
            //     if (filter(item)) return 'switch';
            //     else return 'hide switch';
            // })
            // .classed( 'or', true );
    }

    tags.order = function() {
        // matching and tags: +1
    }

    /** A predicate which applies an and rule for each currently selected tag */
    tags.filter = filter;
    function filter(item) {
        return ands.every( and=>item.tags.includes(and) );
    }

    function toggle(d) {
        // update the tag list and toggle the styling
        let toggle = d3.select(this);
        if (toggle.classed('or')) {
            ands.push( d.tag );
            toggle.classed('or', false);
            toggle.classed('and', true);
        }
        else if (toggle.classed('and')) {
            ands.splice( ands.findIndex( and=>and.tag==d.tag), 1 );
            toggle.classed('and', false);
            toggle.classed('or', true);
        }

        // refresh the display using the cached data
        tags( selection.datum() );

        // emit a filter event
        deck.dispatch.call('filter', tags, d);
    }

    
    return tags;
}