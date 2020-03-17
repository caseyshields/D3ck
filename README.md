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
 - [ ] wait for the iframe to load before showing it
 - [ ] fix the dang shadow effect z height
 - [ ] make card component lazy load images, swap image w/description on mouseover
 - [ ] add sort controls; chronological or tag relevance
 
 design
 - [ ] break up d3 module dependencies
 - [ ] make deck into a hierarchical component as in atlas project
 - [ ] figure out where to host images and how to optimize them
 - [ ] investigate static site generation
 - [ ] consider how the UI might display back-end data too large to fit in memory
 - [ ] modularize styling for components/themes
 - [ ] webmentions
 - [ ] syndication automation



 
