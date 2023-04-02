import { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

const App= ()=> {

  const [query, setQuery] = useState('');

  //   changeQuery = query => {
  //   setQuery( query);
  // };

   return (
      <>
        <Searchbar onSubmit={setQuery} />
        <ImageGallery query={query} />
      </>
    );
}

export default App;
