/** Modal window component for displaying a slideshow of images.
 * @param {Object} deck
 * @param {Object} selection
*/
export default function(deck, selection) {

    // select or create the navigation bar
    let navigation = selection.select('nav');
    if (navigation.size()==0) // what if more than one?
        navigation = selection.append('nav');

    let gallery = selection.select('div');
    if(gallery.size()==0)
        gallery = selection.append('div');

    // close when the backround is clicked, ignoring bubbling events
    selection.node().addEventListener('click', 
        function(event) {
            if (event.target===this)
                hide();
    });

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
<nav>
    <a href="#${d.id}">
        <img src="${d.thumb}" />
    </a>
    <!-- thumbnail is added for each image in the sequence -->
</nav>
<div>
    <figure id="$id" class="slide ${d.class}">
        <a href="#${d.id}">
            <img src="${d.src}"/>
        </a>
        <figcaption>
            ${d.notes}
        </figcaption>
    </figure>
    <!-- figure added for each entry -->
</div>
```*/
    let slides = function( data ) {

        console.log(data);

        // cache the dataset
        selection.datum( data );

        // use the D3 General update pattern to add figures for each entry
        let figures = gallery.selectAll("figure.slide")
            .data(data, d=>d.id);

        figures.exit()
            .remove();

        // add a figure for each data entry
        let newfigures = figures.enter()
            .append('figure')
                .attr('id', d=>d.id)
                .attr( 'class', d=>(d.class==undefined)?'slide' : 'slide '+d.class )
        newfigures.append('a')
                .attr('href', d=>'#'+d.id)// fall back to a scrubbed image name?
            .append('img')
                .attr('src', d=>d.img);//
        newfigures.append('figcaption')
                .html(d=>d.notes);// 

        // assume entries are never modified... might not be a good assumption forever
        figures = newfigures.merge( figures );
        // figures.attr('id', d=>d.id)
        //         .attr('class', d=>(d.class==undefined) ? 'slide' : 'slide '+d.class)

        // let anchor = figures.selectAll('a')
        //         .attr('href', d=>'#'+d.id)

        // anchor.selectAll('img')
        //         .attr('src', d=>d.img);

        // figures.selectAll('figcaption')
        //         .html( d=>d.notes );

        // now add navigation links for all entries
        let links = navigation.selectAll('a')
            .data( data, d=>d.id );

        links.exit()
            .remove();

        links = links.enter()
            .append('a')
            .attr( 'href', d=>'#'+d.id )
            .html( (d,i,s)=>i )//d=>d.id ) //
            .merge( links );
        // TODO just number if no Id's are provided
        // TODO use thumbnails if those are provided...
    }

    slides.hide = hide;
    function hide( a, b, c ) {
        console.log(a, b, c);
        selection.classed('hide', true);
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