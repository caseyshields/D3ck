/** Modal window component for displaying a slideshow of images.
``` html
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
```
*/

export default function(deck, selection) {

    let slides = function() {

    }

    return slides;
}

//TODO lazy loading with intersection observer?
//TODO make a compound component that accepts another component as a slide