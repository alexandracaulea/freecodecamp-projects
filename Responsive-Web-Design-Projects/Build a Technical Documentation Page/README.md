# Build a Technical Documentation Page Project

## Objective

1. Build a CodePen app that is functionally similar to [this](https://codepen.io/freeCodeCamp/full/NdrKKL).
2. I can use HTML, CSS, and JavaScript to complete this project.

## User Stories

1. My Technical Documentation Page should have a `main` element with a corresponding `id="main-doc"`, which contains the page's main content.
2. Within the `#main-doc` element, I can see several section elements, each with a class of `.main-section`. There should be a minimum of 5.
3. The first element within each `.main-section` should be a `header` element which contains text that describes the topic of that section.
4. Each `section` element with the class of `.main-section` should also have an id that corresponds with the text of each header contained within it and any spaces should be replaced with underscores.
5. The `.main-section` elements should contain at least 10 `p` elements total (not each).
6. The `.main-section` elements should contain at least 5 `code` elements total (not each).
7. The `.main-section` elements should contain at least 5 `li` items total (not each).
8. I can see a `nav` element with a corresponding `id="navbar"`.
9. The `navbar` element should contain one `header` element which contains text that describes the topic of the technical documentation.
10. The `navbar` should contain link elements with the class of `.nav-link`. There should be one for every element with the class `.main-section`.
11. The `header` element in the navbar must come before any link elements in the navbar.
12. Each element with the class of `.nav-link` should contain text that corresponds to the header text within each section.
13. When I click on a navbar element, the page should navigate to the corresponding section of the main-doc element.
14. On regular sized devices (laptops, desktops), the element with `id="navbar"` should be shown on the left side of the screen and should always be visible to the user.
15. My Technical Documentation page should use at least one media query.

## Testing

To test the requirements, I've use [this](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) CDN link provided by freeCodeCamp.

## [Solution](https://codepen.io/alexandracaulea/full/zYGKdzZ)

I've implemented a responsive one page technical documentation page built using HTML, SASS and JavaScript.

Since I've used SASS for this project, I've decided to use Parcel as a bundler.

[Live Example on CodePen](https://codepen.io/alexandracaulea/full/zYGKdzZ).

![Technical Documentation Page](src/img/gif/technical-documentation-page.gif)
