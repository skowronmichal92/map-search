import React from 'react';

import Layout from '../../hoc/wrappers/Layout/Layout';
import MapC from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import Alert from '../Alert/Alert';

const App = (props) => {

  return (
    <Layout>
      <SearchBar/>
      <MapC/>
      <Alert/>
    </Layout>
  );
}

export default App;
