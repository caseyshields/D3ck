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
        let switches = selection.selectAll('.switch')
            .data(key);
        switches.exit().remove();
        let newswitches = switches.enter()
            .append('div')
            .classed('switch', true);
        newswitches.append('span')
                .html( d => d.tag );
        switches = newswitches.merge(switches);
    }

    return tags;
}