import React from 'react';
import { connect } from 'react-redux';

import Layout from '../../hoc/wrappers/Layout/Layout';
import MapC from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import Alert from '../Alert/Alert';
import SideMenu from '../SideMenu/SideMenu';
import Logo from '../../components/Logo/Logo';

const App = (props) => {

  return (
    <Layout>
      <MapC/>
      {props.map && (
        <>
          <SearchBar/>
          <SideMenu/>
          
        </>
      )}
      <Alert/>
      <Logo/>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    map: state.map.instance,
  }
}

export default connect(mapStateToProps)(App);