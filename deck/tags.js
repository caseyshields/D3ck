/** Creates a Tag Toggle component, which provides a way to filter dtaa items. 
 * @param {Object} deck The Component framework where you can register and emit events
 * @param {Object} selection A D3 selection where the component's markup will be added, or existing markup will be comandeered
 * @return {Object} the Tags component
 */
export default function(deck, selection) {

    // cached selection of tag element
    let toggles = selection.selectAll('.tag');

    // list of selected tags
    let ands = [];

    /** The render method.
     * It takes an array of data items must contain an array of tags;
    ``` json
        [
            {
                // required;
                tags: [ "collection", "of", "related", "topics" ]
                // ...
            }
            // followed by more entries
        ]
    ```
    * The resulting markup looks like;
    ```html
    <!-- root selection -->
        <div class="tag"> ${tags[n]} </div>
        <!-- divs created for each unique tag in the dataset -->
    <!-- root selection -->
    ``` */
    function tags(data) {

        // cache a reference to the data at the root selection
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
        // TODO should we make this available to user?

        // D3 General Update Pattern applied to tag toggles
        toggles = toggles
            .data(key, function(d) {
                return !d ? 'dummy' : d.tag;}
            );
        toggles.exit().remove();
        let newtoggles = toggles.enter()
            .append('div')
            .classed('tag', true)
            .classed('or', true)
            .on( 'click', toggle )
            .html( d => d.tag );

        newtoggles.append('span')
            .classed('count', true);
            // .html( d => d.count );

        toggles = newtoggles.merge(toggles)
            .style( 'display', function(item) {
                return (item.count>0) ? null : 'none';
            });
        // update counts as filter changes...
        toggles.select('.count').html( d=>d.count );
            // .attr('class', function(item) {
            //     if (filter(item)) return 'toggle';
            //     else return 'hide toggle';
            // })
            // .classed( 'or', true );
    }

    tags.order = function() {
        // matching and tags: +1
    }

    /** A predicate which applies an and rule for each currently selected tag */
    tags.filter = filter;
    function filter(item) {
        // console.log(ands);
        return ands.every( and=>item.tags.includes(and) );
    }

    tags.includes = function(tag) {
        return ands.includes(tag);
    }
    
    /** toggles the clicked tag state between 'or' and 'and'. */
    function toggle(d) {
        // update the tag list and toggle the styling
        let toggle = d3.select(this);

        if (toggle.classed('or')) {
            ands.push( d.tag );
            toggle.classed('or', false);
            toggle.classed('and', true);
        }
        else if (toggle.classed('and')) {
            let n = ands.findIndex( item => item===d.tag );
            ands.splice( n, 1 );
            toggle.classed('and', false);
            toggle.classed('or', true);
        }

        // refresh the display using the cached data
        tags( selection.datum() );

        // emit a filter event
        deck.dispatch.call('filter', tags, d);
    }
    
    tags.toggle = toggle;

    return tags;
}