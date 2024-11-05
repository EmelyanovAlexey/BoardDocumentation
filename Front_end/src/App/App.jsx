/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';

// контейнеры
import StatusContainer from '../Containers/StatusContainer';
import Menu from '../Components/Menu';

// страницы
import HomePageContainer from '../Pages/HomePage/HomePageContainer';

import styles from './App.module.css';

// export NODE_OPTIONS=--openssl-legacy-provider
function App() {
  return (
    <BrowserRouter>
      <StatusContainer />

      <Menu />

      <div className={styles.pages}>
        <Route exact path="/" render={() => <HomePageContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
