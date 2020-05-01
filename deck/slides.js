/** Modal window component for displaying a slideshow of images.
 * @param {Object} deck
 * @param {Object} selection
*/
export default function(deck, selection) {

    /** Renders the given array of slides.
```js
slides = [
    {
        id = '',
        class = '',
        src = '',
        notes = '',
    }
]
```
```html
<figure id="$id" class="slide ${d.class}">
    <a href="#${d.id}">
        <img src="${d.src}"/>
    </a>
    <figcaption>
        ${d.notes}
    </figcaption>
</figure>
```*/
    let slides = function( data ) {

        selection.datum( data );

        let figures = selection.selectAll("figure.slide")
            .data(data);

        figures.exit()
            .remove();

        // add a figure for each data entry
        let newfigures = figures.enter()
                .append('figure')
                .attr('id', d=>d.id)
                .attr('class', d=>'slide '+d.class);
        newfigures.append('a')
                .attr('href', d=>'#'+d.id)
            .append('img')
                .attr('src', d=>d.img);
        newfigures.append('figcaption')
                .html(d=>d.notes);

        // assume entries are never modified
        figures = newfigures.merge(figures);
    }

    return slides;
}

//TODO lazy loading with intersection observer?
//TODO make a compound component that accepts another component as a slide

/*``` html
    <... class="${slides| slides hide}">
        
        <figure id="$id" class="${d.class}">
            <a href="#${d.id}">
                <img src="${d.src}"/>
            </a>
            <figcaption>
                ${d.desc}
            </figcaption>
        </figure>
        ...

        // maybe just keep it simple and do
        <img />
        <p> description </p>
        ...

        // what about adding tags?
        <map name="tags">
            <area shape="" coords="" href="" target="_blank" />
            ...
        </map>
        <img usemap="#tags" src="" />

        // then we'll want skip links along the bottom
        <ol class="skips">
            <a herf="#${id}""><li></li></a> // can you do this?
            ...
        </ol>
        // or should I just put a horizontal scrollbar along the bottom?

        // Well dang thumbnails would be a lot more usable wouldn't it?
        <ol>
            <li><img src="${d.source}"></li>
            ...
        </ol> // but if they can't all be made to fit I'll end up doubling scroll bars...
        <div class="back" />
    </...>
```
``` js
    slides = [
        {
            id = '',
            class = '',
            src = '',
            desc = '',

        }
    ]
```*/