/** Creates a Card component, which summarizes an article and links to it.
 * @param {Object} deck The Component framework where you can register and emit events
 * @param {Object} selection A D3 selection where the component's markup will be added, or existing markup will be comandeered
 * @return {Object} the Card component
 */
export default function(deck, selection) {

    /** The render method.
     * It takes an array of data items which looks something like;
    ``` json
        [
            {
                // required;
                title: "String",
                type: "[ internal_link | external_link ]",
                summary: "A short paragraph description"
                tags: [ "collection", "of", "related", "topics" ]
                img: "A URL to a representative image"
                // media specific types;
                link: "For '*_link' media types, a URL to the page"
            }
            // followed by more entries
        ]
    ```
    * The resulting markup looks like;
    ```html
    <article class="card">
        <a href="${item.link}">${item.title}</a>
        <div> ${item.summary} </div>
        <ul>
            <li> item.tags[n] </li>
            <!-- a bullet is added for every tag -->
        </ul>
    </article>
    <!-- A new card is created for every data item -->
    ``` */
    function card(data) {

        let cards = selection.selectAll('article.card')
            .data(data, function(d) {
                return !d ? 'dummy' : d.title;}
            );

        cards.exit().remove();
        
        // add an article for every item
        let newcards = cards.enter().append('article')
            .each( function (entry) {
                let article = d3.select(this)
                    .attr('class', 'card');
                
                // populate it with a link and image
                article.append('a')
                    .attr('href', entry.link)
                    .attr('target', '_blank')
                    .html(entry.title);
                article.append('img')
                    .attr('src', entry.img);

                // add list items for all the item's tags
                let tags = article.append('ul')
                    .selectAll('li')
                    .data(entry.tags);
                tags.enter()
                    .append('li')
                    .html(d=>d);

                // Add the summary
                article.append('div')
                    .html(entry.summary)
                    // which will also display the item's media according to it's type on a click
                    .on('click', clicker);
            });
        cards = newcards.merge(cards);
    }

    // Event prototypes dispatched by this component
    let navigate = 'navigate';
    let preview = 'preview';
    
    /* When the user clicks on the summary, Card will emit a 'navigate' event for 'external_links' media
     * types, or it will generate a 'preview' event for 'internal_link' media types.
     * Dispatched events are given the Card component as a context and passed the data item as an argument.
     */
    function clicker(d) {
        if (d.type=='internal_link')
            deck.dispatch.call(preview, card, d);
        else if (d.type=='external_link')
            deck.dispatch.call(navigate, card, d);
        // TODO add more media types as I think of them...
    }
    // TODO make behavior more configurable? Per media type?
    // TODO make Component's register events with dispatch at construction?

    return card;
}