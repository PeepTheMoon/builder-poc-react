# builder-poc-react
A builder.io proof-of-concept sandbox using react

## Questions:

1. When I'm in the content editor, I get an error that there is a problem connecting to my site, but it's working on localhost.  
  - I can load the fallback editor eventually, which works.
  - Sometimes I will get an error "builder component for model header not found" but again I can load the fallback editor and it works.

I believe this error has been resolved by changing the site setting to allow insecure content for BOTH localhost:3000 AND builder.io

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

5. Under the options tab in the live content editor on the builder dashboard, I am editing the header fields defined in the model but not seeing those changes reflected in the iframe, neither before or after I hit the publish update button.  Where should I expect to see changes reflected in the live site?

6. I was able to get the blue edit button to display when I am looking at the deployed site using the builder chrome extension, but I am still getting the error re: trouble connecting to the site.  How am I able to check the server to be sure it's running as expected?  When I click the link provided, I am taken to a blank page, which after some time returns a 503 error. as it does in the iframe.  Where is this [url](https://localhost___3000.preview.builder.codes/header/editing) generated?

  When I go to the editing and previewing directly on your site troubleshooting link, I have checked that builder is correctly integrated.

I believe they updated the codebase at builder, because now the warning points to the url defined in the model, i.e. https://localhost:3000/header.  
