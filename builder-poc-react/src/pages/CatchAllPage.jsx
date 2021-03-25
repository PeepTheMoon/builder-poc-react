import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

builder.init('3c7e390ebd25467aa0bf62675258be66')

// Allows users to create new pages with unique URLs
export default function CatchAllPage() {
  const [pageJson, setPage] = useState();

  useEffect(() => {
    builder.get('page', { url: window.location.pathname })
       // The value will be `null` if no page was found
      .promise()
      .then(setPage);
  }, []);

  return pageJson === undefined
    ? <h1>Loading...</h1>
    : pageJson
    ? <BuilderComponent 
        //
        apiKey="3c7e390ebd25467aa0bf62675258be66"
        model="page" 
        content={pageJson} />
    : console.error('Page not found.')
}
