/** A Search component provides a way to filter and order articles. 
 * The markup looks like;
```html
<nav>
    <div><span> ${tags[n]} </span></div>
    <!-- div created for each unique tag in the dataset -->
</nav>
```
*/
export default function(selection) {

    let switches = selection.selectAll('.switch');
    let ands = [];

    function tags(data) {

        selection.datum( data );

        // find all unique keys and count their occurances, only including items with one of the selected tags
        let counts = [];
        data.forEach(item => {
            if (ands.every(and=>item.tags.includes(and))) {
                item.tags.forEach( (tag) => {
                    if (counts[tag]==undefined)
                        counts[tag] = 1;
                    else counts[tag]++;
                })
            }
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
        switches = newswitches.merge(switches);
    }

    function filter(item) {
        return ands.every( and=>item.tags.includes(and) );
    }

    tags.order = function() {
        // matching and tags: +1
    }

    function toggle(d) {
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
    }

    
    return tags;
}