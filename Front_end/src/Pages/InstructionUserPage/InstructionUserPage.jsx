/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './InstructionUserPage.module.css';

function InstructionUserPage({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>
    </div>
  );
}

InstructionUserPage.propTypes = {
  children: PropTypes.node,
};

InstructionUserPage.defaultProps = {
  children: '',
};

export default InstructionUserPage;
