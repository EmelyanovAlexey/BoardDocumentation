/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// контейнеры
import StatusContainer from "../Containers/StatusContainer";
import Menu from "../Components/Menu";
import DocumentationSidebar from "../Containers/DocumentationSidebar";

// страницы
import HomePageContainer from "../Pages/HomePage/HomePageContainer";
import ReviewsPageContainer from "../Pages/ReviewsPage/ReviewsPageContainer";
import DocumentationContainer from "../Pages/DocumentationPage";
import InstructionUserPage from "../Pages/InstructionUserPage";
import InstructionWorkPage from "../Pages/InstructionWorkPage";
import SearchPageContainer from "../Pages/SearchPage/SearchPageContainer";
import ApiPageContainer from "../Pages/ApiPage/ApiPageContainer";

import styles from "./App.module.css";

// export NODE_OPTIONS=--openssl-legacy-provider
// "homepage": ".",
function App() {
  return (
    <BrowserRouter basename="/">
      <StatusContainer />

      {/* отключил навигацию для на время лендинга */}
      {/* <Menu />  */}

      <div className={styles.pages}>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/reviews" render={() => <ReviewsPageContainer />} />
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
        <Route
          exact
          path="/documentation/api"
          render={() => (
            <ApiPageContainer>
              <DocumentationSidebar />
            </ApiPageContainer>
          )}
        />
        <Route
          exact
          path="/documentation/search"
          render={() => (
            <SearchPageContainer>
              <DocumentationSidebar />
            </SearchPageContainer>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
