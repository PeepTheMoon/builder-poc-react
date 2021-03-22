# builder-poc-react
A builder.io proof-of-concept sandbox using react

## Questions:

1. When I'm in the content editor, I get an error that there is a problem connecting to my site, but it's working on localhost.  
  - I can load the fallback editor eventually, which works.
  - Sometimes I will get an error "builder component for model header not found" but again I can load the fallback editor and it works.

2. I expect to see my default values defined in the model appear on the page when I render it in the content live editor preview, but I don't.

3. I expect to see the developer usage code to change when I add custom fields to a model in the dashboard.  How are custom fields different from props?  

4. How does the following code reflect the model configurations in the builder dashboard, and where do I put this in my code? 
   - In some examples it's in the component file and in others it's extracted into a builder-settings.js.  I'm not sure where to run that file in the codebase. 

```
Builder.registerComponent(
     Header, {
       name: 'header',
       inputs: [
         { 
           name: 'headerTextContent', 
           type: 'text',
           required: true,
           defaultValue: 'Default header text' 
         }
       ]
     }
   )
   ```



