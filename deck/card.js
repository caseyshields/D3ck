/** Creates a Card component which summarizes an article and links to it.
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
```
 */
export default function(selection) {

    function card(data) {

        let cards = selection.selectAll('article.card')
            .data(data, function(d) {
                return !d ? 'dummy' : d.title;}
            );

        cards.exit().remove();
        
        let newcards = cards.enter().append('article')
            .each( function (entry) {
                let article = d3.select(this)
                    .attr('class', 'card');
                article.append('a')
                    .attr('href', entry.link)
                    .html(entry.title);
                article.append('img')
                    .attr('src', entry.img);
                article.append('div')
                    .html(entry.summary);

                let tags = article.append('ul')
                    .selectAll('li')
                    .data(entry.tags);
                tags.enter()
                    .append('li')
                    .html(d=>d);
            });
        cards = newcards.merge(cards);
    }

    return card;

}