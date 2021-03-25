import { BuilderComponent, builder } from '@builder.io/react';

builder.init('3c7e390ebd25467aa0bf62675258be66');

export function DisplayPage(props) {
  // if (!Builder.isEditing && !Builder.isPreviewing && !props.content) {
  //    return console.error('There was an error')
  // }
  return <>
  <h1>This is the display page</h1>
  <BuilderComponent
    // In some places I see this key as content=, but the content for this page from the dashboard wasn't rendering.  I changed it below based on the codepen sent to me from the forum post!
    contentLoaded={props.content}
    model="display-page" />
    </>
}
