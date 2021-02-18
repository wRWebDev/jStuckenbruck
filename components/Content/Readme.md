Content
=======

Each file provides the body content for each page of the same name. i.e. Schedule.js is called by /schedule, and sits between the `<main>` tags on that page.

This was done in an early refactoring of the site structure so as to dedicate the files in the /pages directory to calling server-side rendering the data from Firebase. 

The received data is then passed to these components.

The purpose of this was readability for me.