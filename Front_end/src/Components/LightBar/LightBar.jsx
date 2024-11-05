/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './LightBar.module.css';

function LightBar({ className, color }) {
  function getColor() {
    if (color === 'blue') {
      return styles.blue;
    }
    if (color === 'yellow') {
      return styles.yellow;
    }
    if (color === 'green') {
      return styles.green;
    }
    return styles.red;
  }

  return <div className={clsx([styles.root, getColor(), className])} />;
}

LightBar.propTypes = {
  className: PropTypes.string,
  // style: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'green']),
};

LightBar.defaultProps = {
  className: PropTypes.string,
  // style: PropTypes.string,
  color: 'red',
};

export default LightBar;
