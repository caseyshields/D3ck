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
        <div class="tag">
            ${d.tag}
            <span class="count">
                ${d.count}
            </span>
        </div>
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
            .on( 'click', clicked )
            .html( d => d.tag );

        newtoggles.append('span')
            .classed('count', true);
            // .html( d => d.count );

        toggles = newtoggles.merge(toggles)
            .style( 'display', function(item) {
                return (item.count>0) ? null : 'none';
            })
            .sort( (a,b)=>b.count-a.count );
            // Should I make sort function configurable?
            // So user might switch between chrono or relevance order for example?
            
        // update counts as filter changes...
        toggles.select('.count').html( d=>d.count );
            // .attr('class', function(item) {
            //     if (filter(item)) return 'toggle';
            //     else return 'hide toggle';
            // })
            // .classed( 'or', true );
    }

    /** A predicate which requires the item.tags array to include every selected tag
    */
    tags.filter = filter;
    function filter(item) {
        return ands.every( and=>item.tags.includes(and) );
    }

    /** @returns whether the given tag string is currently selected.
    */
    tags.includes = function(tag) {
        return ands.includes(tag);
    }
    // TODO provide an accessor that checks if content even has the given tag
    
    /** toggles the clicked tag state between 'or' and 'and'.
     * @param {Object} d - the datum from the clicked UI tag
    */
    function clicked(d) {
        let toggle = d3.select(this); // D3 passes the clicked element as 'this'
        flip(d.tag, toggle);
        refresh( d );
    }

    /** Find the toggles that match tags in the list and flip them.
     * If a given tag name has no corresponding toggle in the component, it is ignored.
     * @param {Array} tags - a list of tag strings
    */
    function toggle( tags ) {
        selection.selectAll('div')
            .filter( d=>tags.includes(d.tag) )
            .each( function(d) {
                let div = d3.select(this);
                flip( d.tag, div );
            } );
        refresh();
    }
    // TODO : if you select mutually exclusive tags all toggles will disapear, and you willl not be able to flip them!
    // while it is not possible to click-in such an input, we should still consider how to recover from this state...

    /** Updates the selected tag list and changes the styling of the given div
     * @param {string} tag - the tag string
     * @param {Object} div - A singular D3 selection of the tag's DOM element
    */
    function flip( tag, div ) {
        if (div.classed('or')) {
            ands.push( tag );
            div.classed('or', false);
            div.classed('and', true);
        }
        else if (div.classed('and')) {
            let n = ands.findIndex( item => item===tag );
            ands.splice( n, 1 );
            div.classed('and', false);
            div.classed('or', true);
        }
    }

    /** refresh the component and dispatch a filter event.
     * @param {Object} datum - Optional, the tag that changed. */
    function refresh( datum ) {
        // re-render the display using the cached data
        tags( selection.datum() );

        // emit a filter event so other components can update
        deck.dispatch.call('filter', tags, datum);
    }

    tags.toggle = toggle;

    return tags;
}