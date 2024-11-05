/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// контейнеры
import StatusContainer from '../Containers/StatusContainer';
import Menu from '../Components/Menu';
import DocumentationSidebar from '../Containers/DocumentationSidebar';

// страницы
import HomePageContainer from '../Pages/HomePage/HomePageContainer';
import DocumentationContainer from '../Pages/DocumentationPage';
import InstructionUserPage from '../Pages/InstructionUserPage';
import InstructionWorkPage from '../Pages/InstructionWorkPage';

import styles from './App.module.css';

// export NODE_OPTIONS=--openssl-legacy-provider
function App() {
  return (
    <BrowserRouter>
      <StatusContainer />

      <Menu />

      <div className={styles.pages}>
        <Route exact path="/home" render={() => <HomePageContainer />} />
        <Route exact path="/documentation">
          <Redirect to="/documentation/description" />
        </Route>
        <Route
          exact
          path="/documentation/description"
          render={() => (
            <DocumentationContainer>
              <DocumentationSidebar />
            </DocumentationContainer>
          )}
        />
        <Route
          exact
          path="/documentation/instruction_user"
          render={() => (
            <InstructionUserPage>
              <DocumentationSidebar />
            </InstructionUserPage>
          )}
        />
        <Route
          exact
          path="/documentation/instruction_work"
          render={() => (
            <InstructionWorkPage>
              <DocumentationSidebar />
            </InstructionWorkPage>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
