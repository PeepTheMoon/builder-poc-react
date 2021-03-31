import { Header } from './Header.jsx';
import { Builder } from '@builder.io/react';

export const HeaderBuilderConfig = {
  name: 'header',
  inputs: [
    {
      name: 'headerTextContent',
      type: 'text',
      required: true,
      defaultValue: 'Yooo check this header!'
    }
  ]
};

//When should I use the following logic directly in a component vs extracting it to its own file like this one, to be ran in the builder-settings.js file?

// Builder.registerComponent(
//   Header, {
//     name: 'header',
//     inputs: [
//       { 
//         name: 'headerTextContent', 
//         type: 'text',
//         required: true,
//         defaultValue: 'Default header text' 
//       }
//     ]
//   }
// )

Builder.registerComponent(Header, HeaderBuilderConfig);
