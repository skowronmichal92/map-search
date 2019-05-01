import React from 'react';

import Layout from '../../hoc/wrappers/Layout/Layout';
import MapC from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import Alert from '../Alert/Alert';
import SideMenu from '../SideMenu/SideMenu';

const App = (props) => {

  return (
    <Layout>
      <MapC/>
      <SearchBar/>
      <SideMenu/>
      <Alert/>
    </Layout>
  );
}

export default App;
