# D3CK

D3 Component Kit.

A collection of D3 UI components.
They basically apply the general update pattern to CMS data to generate clean markup.
Styling is meant to be interchangeable in the manner of CSS Zen Garden.

A work in progress. The biggest change will be supporting hierarchical container components. Eventually I want to support indie web formats and mechanisms.

framework
 - [x] make components comunicate with the app using dispatch
 - [ ] break up d3 module dependencies
 - [x] figure out where to host images and how to optimize them
 - [ ] figure out where to really host the content.
 - [x] media query for a vertical phone layout 
 - [ ] investigate static site generation
 - [ ] consider how the UI might display back-end data too large to fit in memory
 - [ ] modularize styling for components/themes
 - [ ] webmentions
 - [ ] syndication automation tools

card deck
 - [ ] 
 - [ ] make card component lazy load images, swap image w/description on mouseover
 - [x] make an external/internal link distinction and make the modal behave appropriately
 - [ ] fix the dang shadow effect z height
 - [x] make internal/external link a visible distinction
 - [ ] make deck into a hierarchical component as in atlas project, accepting arbitrary components as cards...

modal
 - [ ] display a component provided at construction
 - [ ] provide a background tag that dismisses the modal when clicked
 - [ ] recursively render using container interface
 - [ ] disable background scroll when preview modal is open

tag filter
 - [x] add a tag toggles component to the filter/navigation.
 - [ ] URL arguments for tag filters
 - [ ] add animated transitions for filter state changes
 - [x] add tag relevance sort

chronological filter
 - [ ] add dates to all entries
 - [ ] add a brushable timeline
 - [ ] add bubble lens distortion for fine adjustment
 - [ ] and new events to notify filter changes, and provide filter predicate
 
carousel
 - [x] add a Carousel component
 - [ ] fix carousel styling; centering, maintaining aspect, nav link shape
 - [ ] figure out how to lazy load and thumbnail images with carousel

hero
 - [ ] switch to SVG hero and figure out how to dynamically alter colors

preview frame
 - [ ] wait for the iframe to load before showing it
 - [x] fix preview modal button

