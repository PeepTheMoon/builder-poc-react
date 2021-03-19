import { Builder, builder } from '@builder.io/react';
import './components/Header.builder.js';

// Remove this to allow all built-in components to be used too
builder.init('3c7e390ebd25467aa0bf62675258be66');

const OVERRIDE_INSERT_MENU = false;

if (OVERRIDE_INSERT_MENU) {
  // (optionally) use this to hide all default built-in components and fully manage the insert menu components and sections yourself
  Builder.set({ customInsertMenu: true });
}

// (optionally) set these to add your own sections of components arranged as you choose.  This can be used with or without `customInsertMenu` above
Builder.register('insertMenu', {
  items: [
    { name: 'Header'}
  ]
});
