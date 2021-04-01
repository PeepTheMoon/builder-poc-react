import { Header } from './Header.jsx';
import { Builder, withChildren } from '@builder.io/react';

const BuilderHeader = withChildren(Header);

Builder.registerComponent(BuilderHeader, {
    name: 'header',
    inputs: [
      { 
        name: 'backgroundColor', 
        type: 'color',
        required: true,
        defaultValue: B8E986 
      }, {
        name: 'textContent',
        type: 'text',
        required: true,
        defaultValue: 'This is the header'
      }
    ]
  }
);
