import React from 'react';

import Layout from '../../hoc/wrappers/Layout/Layout';
import MapC from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';

const App = (props) => {

  return (
    <Layout>
      <SearchBar/>
      <MapC/>
    </Layout>
  );
}

export default App;
