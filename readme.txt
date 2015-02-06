A few notes of the server-side and client-side optimizations:
============================================================

- All thumbnail images should be made of the same size on the server to avoid unnesessary processing on the client side. If that's not possible a component should be developed to represent a product thumbnail which will calculate width and height of an image to preserve image proportions (now it is hardcoded in the CSS to be stretched/reduced to 150x150 pixels).
- extra-long product titles should be truncated and/or saved in the extra data field
- A default thumbnail image to be provided - if there's an error fetching an actual thumbnail, this default one should be displayed instead.
- Client-side caching to be implemented using browser's local storage (if available) - once fetched product lists should be cached to reduce unnesessary network communications. 
- have multiple configs for easy switching between JSON stubs versus backend service calls. 
- minify and compress javascript files, have multiple .HTML versions for compressed/development versions of the app; develop a grunt script to automate this.
- for all invalid requests (non-existing category request, non-existing product etc.) prepare corresponding error messages/default views etc.
- For development and easy versioning each controller/module/template/etc. should be placed in their own file; Grunt/Gulp script should be present to perform stitching/assembly of different functions/parts independently.

- To avoid 'Access-Control-Allow-Origin' errors index.html should not be run under Chrome in MacOS as is. Alternatively, you may run Chrome with options like so:

	open -a /Applications/Google\ Chrome.app --args --disable-web-security

Local webserver and json stubs (or proxy) may be used as well.


- Deep linking should be implemented.
- e2e testing procedures are missing (my local Selenium driver is happen to be crippled). These are simple to implement by things like browser.get('index.html'), element('category#2').click(), repeater('.product').count() etc. 


testing:
========

	npm test

	- or -

	node_modules/.bin/karma start test/karma.conf.js --no-auto-watch --single-run --reporters=dots
