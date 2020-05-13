/** Iframe for internal previews. Will either initialize with existing markup or will generate its own if it can't find a match.
 ```html
    < ... class="${preview hide|preview}">
        <iframe
            src="${source}"
            visible="${visible}"
            scrolling="yes"
            frameborder=0>
        </iframe>
    </...>
 ```
 */
export default function(deck, selection) {
    
    // select the frame's components
    let preview = selection.select('.preview');
    let iframe = preview.select('iframe');
    // let button = selection.select('button');

    let frame = function() {

        // create iframe if it doesn't exist
        if (iframe.size()==0)
            iframe = selection.append('iframe')
                .attr('src', '')
                .attr('scrolling', 'yes')
                .attr('frameborder', 0); // should be in styling?

        // set up the close behavior
        preview.on("click", hide);
    }

    /** Navigates the iframe to the given URL, and makes the frame visible by removing the CSS class '.hide'. */
    frame.show = function( url ) {
        iframe.attr('src', url);
        // TODO display an busy symbol, wait until document is loaded, remove busy, show frame?
        preview.classed('hide', false);
    }

    /** Hides the frame but does not change the DOM structure.
     * Instead, the token 'hide' is added to it's CSS class. So your styling needs a rule like;
``` css
    .hide { display: none; }
``` 
     * This is included in the sample style sheet. */
    frame.hide = hide;
    function hide( ) {
        preview.classed('hide', true);
    }

    /** Set up the frame component to listen to preview events. */
    deck.dispatch.on('preview', function(d) {
        console.log(d);
        if (d.link)
            frame.show( d.link );
    }); // TODO this should probably be done in the application...

    // hide the frame by default.
    frame.hide();

    return frame;
}