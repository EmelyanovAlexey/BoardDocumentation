/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './InstructionWorkPage.module.css';

function InstructionWorkPage({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>
    </div>
  );
}

InstructionWorkPage.propTypes = {
  children: PropTypes.node,
};

InstructionWorkPage.defaultProps = {
  children: '',
};

export default InstructionWorkPage;
