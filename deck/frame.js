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
export default function(selection) {
    
    let state = {
    };

    let frame = function(options) {
        Object.assign( state, options );

        // select the iframe, creating it if it doesn't exist
        if (state.iframe==undefined)
            state.iframe = selection.select('iframe');
        if (state.iframe.size()==0)
            state.iframe = selection.append('iframe')
                .attr('src', '')
                .attr('visible', false)
                .attr('scrolling', 'yes')
                .attr('frameborder', 0) // should be in styling?
                ;//.style('display', 'none');

        // select the button, creating it if it doesn't exist
        if (state.button==undefined)
            state.button = selection.select('button');
        if (state.button.size()==0)
            state.button = selection.append('button')
                .html("close");

        // set up the close behavior
        state.button.on("click", hide)
    }

    /** navigate the iframe to the given URL, and make the frame visible */
    frame.show = function( url ) {
        state.iframe.attr('src', url);
        selection.style('display', null);
    }

    function hide( ) {
        selection.style('display', 'none');    
    }
    frame.hide = hide;

    return frame;
}