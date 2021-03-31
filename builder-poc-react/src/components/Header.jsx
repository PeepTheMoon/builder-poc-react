import React from 'react';
import { builder, Builder } from '@builder.io/react';

builder.init('3c7e390ebd25467aa0bf62675258be66');

// How exactly are props used?  Where are they being passed from the builder dashboard?  I expected custom fields defined in the builder model would be the properties passed down to the component, but the custom fields don't appear anywhere when the options are filled out in the Builder editor.  

export function Header(props) {
  console.log(props);
return <>
    {props.backgroundColor}
  </>
}

// I have tried the following logic extracted into Header.builder.js.  In builder, the type is 'text', but in the registerComponent implementation, it's 'string'.  

Builder.registerComponent(Header, {
  name: "header",
  defaultStyles: {
    backgroundColor: "blue",
  },
  inputs: [
    { 
      name: "Background color", 
      type: "string" 
    }
  ]
});

