import { Header } from './Header.jsx';
import { Builder } from '@builder.io/react';

export const HeaderBuilderConfig = {
  name: 'header',
  inputs: [
      { 
        name: 'backgroundColor', 
        type: 'color',
        required: true,
        defaultValue: '#B8E986' 
      }, {
        name: 'textContent',
        type: 'text',
        required: true,
        defaultValue: 'This is the header'
      }
    ]
};

Builder.registerComponent(Header, HeaderBuilderConfig);

// const BuilderHeader = withChildren(Header);

// Builder.registerComponent(BuilderHeader, {
//     name: 'header',
//     inputs: [
//       { 
//         name: 'backgroundColor', 
//         type: 'color',
//         required: true,
//         defaultValue: '#B8E986' 
//       }, {
//         name: 'textContent',
//         type: 'text',
//         required: true,
//         defaultValue: 'This is the header'
//       }
//     ]
//   }
// );
