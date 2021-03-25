import { BuilderComponent, builder } from '@builder.io/react';

builder.init('3c7e390ebd25467aa0bf62675258be66');

export function LandingPage() {
  return <>
    <h1>This is the home/landing page</h1>

    <BuilderComponent
      model="page" />
  </>
}
