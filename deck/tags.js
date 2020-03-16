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

    function tags(data) {

        // find all unique keys and count their occurances
        let counts = [];
        data.forEach(item => {
            item.tags.forEach( (tag) => {
                if (counts[tag]==undefined)
                    counts[tag] = 1;
                else counts[tag]++;
            })
        });
        
        // convert them to an array D3 can use
        let key = []
        for (let tag in counts)
            key.push( {tag, count:counts[tag]} );

        // D3 General Update Pattern applied to tag switches
        switches = switches//selection.selectAll('.switch')
            .data(key);
        switches.exit().remove();
        let newswitches = switches.enter()
            .append('div')
            .classed('switch', true)
            .classed('or', true)
            .on( 'click', toggle )
            .html( d => d.tag );
        switches = newswitches.merge(switches);
    }

    tags.filter = function(d) {
        // find all 'and' tags
        // find all 'not' tags
        //reject if no 'and' tags match
        //reject if any 'not' tags match
        //otherwise accept
    }

    tags.order = function() {
        // matching and tags: +1
    }

    function toggle(d) {
        let toggle = d3.select(this);
        if (toggle.classed('or')) {
            toggle.classed('or', false);
            toggle.classed('and', true);
        } else if (toggle.classed('and')) {
            toggle.classed('and', false);
            toggle.classed('not', true);
        } else if (toggle.classed('not')) {
            toggle.classed('not', false);
            toggle.classed('or', true);
        }
    }

    
    return tags;
}