# Questions and realizations while exploring model options in the dashboard:

When defining models in the Builder dashboard, if it's a page, you will have the URL path prefix field populate in the model. The standard page model works for all pages of your application, where I thought one had to be made for each page.

I also noticed that any endpoint that is typed in the browser will render the home page of your application, even if the endpoint doesn't exist. The same follows for other page models defined in the dashboard. For example, /display-page/apples doesn't exist in the codebase or in the dashboard, but it renders the hard-coded display-page content.

It looks like you can add different iterations of the page. For example, in the dashboard, you may have a products page at /products where a list of your products will be rendered. If you would like to change the appearance of this page depending on the season, you could make a version of that page with different images, fonts, text, etc.

I created a spring version of the display page in the dashboard at /display-page/spring which renders in the dashboard itself but not when I hit that endpoint on localhost. It's rendering the expected display page content for the hard coded page, but I expect it to render using the endpoint defined for the published page from the dashboard.

It also appears that whatever is coming from the code-base is not editable in the Builder dashboard. So you set up a page, the user can edit the entire page except what's hard-coded. And if you set up a section, only that portion of the page will be editable.
