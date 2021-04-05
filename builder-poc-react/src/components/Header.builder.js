import { Header } from './Header.jsx';
import { Builder, withChildren } from '@builder.io/react';

// export const HeaderBuilderConfig = {
//   name: 'header',
//   inputs: [
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
//     ],
//     childRequirements: {
//       message: 'You can only put Text in this component',
//       query: {
//         'component.name': { $in: ['Text'] },
//       },
//     },
//     defaultChildren: [
//       {
//         '@type': '@builder.io/sdk:Element',
//         component: {
//           name: 'Heading',
//           options: {
//             text: 'Editable heading text',
//             type: 'h1'
//           }
//         }
//       }, {
//         '@type': '@builder.io/sdk:Element',
//         component: {
//           name: 'Text',
//           options: {
//             text: 'You can edit this text content, duplicate it, or delete it.'
//           }
//         }
//       }
//     ]
// };

// Builder.registerComponent(Header, HeaderBuilderConfig);

const BuilderHeaderChildren = withChildren(Header);

Builder.registerComponent(BuilderHeaderChildren, {
  name: 'Header with Children',

  inputs: [
      { 
        name: 'backgroundColor', 
        type: 'color',
        required: true,
        defaultValue: '#B8E986' 
      }, 
      {
        name: 'textContent',
        type: 'text',
        required: true,
        defaultValue: 'This is the default header.'
      }
    ],

    childRequirements: {
      message: 'You can only put Text in this component',
      query: {
        'component.name': { $in: ['Text'] },
      },
    },

    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Heading',
          options: {
            text: 'Editable heading text',
            type: 'h1'
          }
        }
      }, {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Text',
          options: {
            text: 'You can edit this text content, duplicate it, or delete it.'
          },
        },
      },
    ],
});
