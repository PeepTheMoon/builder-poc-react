# Builder notes
Making sense of the [builder.io](https://www.builder.io/c/docs/how-builder-works) docs.

# What Builder is:
Builder is a visual development platform where a user can connect their exiting code and enable anyone on the team to create/manage content without touching/writing any code.  The content can be published and synced to the live site instantly.

# How Builder works:
You can control parts of your site in builder and leave some sections hard-coded, in 3 main ways:
1. **Builder pages:**
  Full drag and drop control between the site's header and footer.

  *When managing pages in the Builder dashboard, I should expect to see a blue "+ Add Block" button in the visual editor, and when rendering my poc I haven't seen that.  This is why I am having trouble dragging and dropping components in the Builder dashboard live edit section-- check Builder component integration in the code base, go through the [developer setup](https://www.builder.io/c/docs/getting-started) again*

2. **Builder sections:**
  Make only part of a page visually editable in the Builder dashboard and use [targeting and scheduling](https://www.builder.io/c/docs/guides/targeting-and-scheduling) to decide who sees what.

  *This should be the feature to allow specific parts of a page to be edited.  Look into how editing permissions are handled in the Builder dashboard.   Are you able to restrict editing to only the color of section but not the text, or vice versa?  Can you set up default values in your code and have that content editable in the dashboard, or are they fully managed outside of the codebase and only in the dashboard?  Can you restrict what types of components are used in each section, like if you don't want someone to be able to add an image?*
    **I believe this is done with the models, templates, symbols, sections, etc. defined int he dashboard.  Things coming from the code base do not appear to be editable** 

  *In this [example builder page](https://builder.io/fiddle/fb98adf93ad5467180329fdaa9711f27), are the Simple Components, Dynamic Components, and Blocks sections [templates](https://www.builder.io/c/docs/guides/templates) or [symbols](https://www.builder.io/c/docs/symbols) created by Builder for this example?  What about the "Import From" section (which has Builder templates included)- how is this added to the insert menu options in the dashboard?*

3. **Builder data:**
  Fetch data from Builder and use it anywhere, such as navigation links, menu items, product data, blog posts, etc.

To [get started](https://www.builder.io/c/docs/getting-started), they recommend beginning with a landing page.

*One thing I'm unsure about is that <BuilderComponent /> seems to render the page component as expected, regardless of whether the model attribute just says "page" in the codebase or matches the unique-identifier name defined in the model in the Builder dashboard.*
