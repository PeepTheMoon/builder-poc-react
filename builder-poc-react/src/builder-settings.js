import { Builder, builder } from '@builder.io/react';

import './components/Header.builder.js';

// Remove this to allow all built-in components to be used too
const BUILDER_KEY = '3c7e390ebd25467aa0bf62675258be66';
builder.init(BUILDER_KEY);

const OVERRIDE_INSERT_MENU = false;

// Remove this to allow all built-in components to be used too
if (OVERRIDE_INSERT_MENU) {
  // (optionally) use this to hide all default built-in components and fully manage the insert menu components and sections yourself
  Builder.set({ customInsertMenu: true });
}

// (optionally) set these to add your own sections of components arranged as you choose.  This can be used with or without `customInsertMenu` above
Builder.register('insertMenu', {
  name: 'Advanced dynamic components',
  items: [
    { name: 'Header With Children',
      item: {
        component: {
          name: 'Header',
          options: {
            backgroundColor: '#B8E986'
          },
        },
        children: [
          {
            '@type': '@builder.io/sdk:Element',
            component: {
              name: 'Heading',
              options: {
                text: 'Editable heading text',
                type: 'h1'
              }
            }
          }
        ]
      }
    }
  ]
});
