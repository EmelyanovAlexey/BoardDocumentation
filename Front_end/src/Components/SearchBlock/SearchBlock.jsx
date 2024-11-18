/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Glyph from '../Glyph';

import styles from './SearchBlock.module.css';

function SearchBlock({ className, onClick }) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Поиск" className={styles.search_input} />
      <button type="button" className={styles.search_btn}>
        <Glyph name="Search" />
      </button>
    </div>
  );
}

SearchBlock.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SearchBlock.defaultProps = {
  className: '',
  onClick: () => {},
};

export default SearchBlock;
