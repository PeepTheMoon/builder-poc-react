import React from 'react';
import { builder, BuilderComponent } from '@builder.io/react';

builder.init('3c7e390ebd25467aa0bf62675258be66');

//How builder suggests registering the component in your code once the model has been created in the visual editor:

export default const AnnouncementBar = () => (
  <BuilderComponent
    model="announcement-bar" 

    // example of passing data from the builder CMS to our react components that have been registered with builder:

      // content={json} 
      
  />
);


// This is an example of a component taking props from their [technical overview docs](https://www.builder.io/c/docs/how-builder-works-technical).  From the docs, it appears that custom fields created in the model in the visual editor are the inputs/props that component will accept and then pass from the CMS as data to the builder registered component in our code:

  // import { Builder } from '@builder.i/react';

  // const Heading = (props) => <h1>{props.text}</h1>

  // Builder.registerComponent(Heading, {
  //   name: 'heading',
  //   inputs: [{ type: 'string', name: 'text' }]
  // })

//This syntax is used in their react-design-systems repo, which I modelled when writing the Header component, but the props aren't displaying as expected in the visual editor, nor are the changes created there reflected in the iframe content.
