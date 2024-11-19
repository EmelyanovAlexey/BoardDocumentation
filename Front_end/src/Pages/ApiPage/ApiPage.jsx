/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactOpenApiRenderer from '@tx-dts/react-openapi-renderer';
import '@tx-dts/react-openapi-renderer/dist/index.css';

import Panel from '../../Components/Panel';

import styles from './ApiPage.module.css';

function ApiPage({ children, docs, loading, fetchApi }) {
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>

      <div className={styles.content}>
        <Panel className={styles.panel} title="API">
          {loading && <p>Загрузка ...</p>}
          {!loading && docs === null && <p>нет данных</p>}
          {docs !== null && <ReactOpenApiRenderer specification={docs} />}
        </Panel>
      </div>
    </div>
  );
}

ApiPage.propTypes = {
  children: PropTypes.node,
  docs: PropTypes.string,
  loading: PropTypes.bool,
  fetchApi: PropTypes.func,
};

ApiPage.defaultProps = {
  children: '',
  docs: null,
  loading: false,
  fetchApi: () => {},
};

export default ApiPage;
