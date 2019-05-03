import React from 'react';
import { connect } from 'react-redux';

import MediaQuery from 'react-responsive';

import Layout from '../../hoc/wrappers/Layout/Layout';
import MapC from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import SideMenu from '../SideMenu/SideMenu';
import Alert from '../Alert/Alert';
import Logo from '../../components/Logo/Logo';

import { pageWidths } from '../../other/mediaQuery';

const App = (props) => {

  return (
    <Layout>
      <MapC/>
      {props.map && (
        <>
          <SearchBar/>
          <MediaQuery minWidth={pageWidths.sm}>
            {(matches) => matches ? <Menu/> : <SideMenu/>}
          </MediaQuery>  
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