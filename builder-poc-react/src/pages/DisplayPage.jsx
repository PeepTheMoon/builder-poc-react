import { BuilderComponent, builder } from '@builder.io/react';
// import { Header } from '../components/Header';
import '../components/Header';

builder.init('3c7e390ebd25467aa0bf62675258be66');

// export default let BuilderPage = () => {
  
//   const [pageJson, setPage] = useState(null);

//   useEffect(() => {
//     builder.get('page', { url: '/' })
//     .promise().then(setPage), [])

//     return 
//       <BuilderComponent 
//         model="page" 
//         content={pageJson} 
//       />
//   }

export function DisplayPage(props) {
  // if (!Builder.isEditing && !Builder.isPreviewing && !props.content) {
  //    return console.error('There was an error')
  // }
  return <>
  <h1>This is the display page</h1>
  <BuilderComponent
    content={props.content}
    model="page" />
    </>
}

//getstaticprops- next js
