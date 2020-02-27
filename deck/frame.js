/** Iframe for internal previews. Will either initialize with existing or will generate its own if it can't find a match.
 ```html
    <iframe
        src="${source}"
        visible="${visible}"
        scrolling="yes"
        frameborder=0>
    </iframe>
    <button>
        close
    </button>
 ```
 */
export default function(deck, selection) {
    
    // select the frames components
    let iframe = selection.select('iframe');
    let button = selection.select('button');

    let frame = function() {

        // create iframe if it doesn't exist
        if (iframe.size()==0)
            iframe = selection.append('iframe')
                .attr('src', '')
                .attr('scrolling', 'yes')
                .attr('frameborder', 0); // should be in styling?

        // create button it if it doesn't exist
        if (button.size()==0)
            button = selection.append('button')
                .html("close");

        // set up the close behavior
        button.on("click", hide)
    }

    /** navigate the iframe to the given URL, and make the frame visible */
    frame.show = function( url ) {
        iframe.attr('src', url);
        //TODO wait until document is loaded!
        selection.classed('hide', false);
    }

    /** Hides the frame but does not change its contents */
    frame.hide = hide;
    function hide( ) {
        selection.classed('hide', true);
    }

    /** Set up the frame component to listen to preview events. */
    deck.dispatch.on('preview', function(d) {
        console.log(d);
        if (d.link)
            frame.show( d.link );
    });

    // hide the frame by default.
    frame.hide();

    return frame;
}