import { BuilderComponent, builder } from '@builder.io/react';
import '../components/Header';

builder.init('3c7e390ebd25467aa0bf62675258be66');

export function DisplayPage() {
  // if (!Builder.isEditing && !Builder.isPreviewing && !props.content) {
  //    return console.error('There was an error')
  // }
  // console.log(props)
  return <>  
  <BuilderComponent
    model="display-page" 
    // contentLoaded={props.builderContent}
    />
    </>
}
