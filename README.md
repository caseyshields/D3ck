# D3CK

D3 Component Kit.

A collection of D3 UI components.
They basically apply the general update pattern to CMS data to generate clean markup.
Styling is meant to be interchangeable in the manner of CSS Zen Garden.

As a first experiment I rewrote my Vue card deck components in a single sitting, and arrived at something much more concise. Not as powerful as Vue, but I don't have to deal with templates or build tools. Plus I can remove another dependency since I usually am already using D3 in my web projects.

tasks
 - [x] add a modal component
 - [x] make components comunicate with the app using dispatch
 - [x] make an external/internal link distinction and make the modal behave appropriately
 - [x] add a tag toggles component to the filter/navigation.
 - [ ] make card component lazy load images, swap image w/description on mouseover
 - [ ] break up d3 module dependencies
 - [ ] URL arguments for tag filters

 tweaks
 - [ ] wait for the iframe to load before showing it
 - [ ] fix the dang shadow effect z height
 - [x] fix preview modal button
 - [x] make internal/external link a visible distinction
 - [ ] disable scroll when preview modal is open
 - [ ] add animated transitions for filter state changes

 design
 - [ ] figure out where to host images and how to optimize them
 - [ ] add sort controls; chronological or tag relevance
 - [x] media query for a vertical phone layout 
 - [ ] make deck into a hierarchical component as in atlas project
 - [ ] investigate static site generation
 - [ ] consider how the UI might display back-end data too large to fit in memory
 - [ ] modularize styling for components/themes
 - [ ] webmentions
 - [ ] syndication automation



 
