/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Glyph from '../Glyph';

import styles from './SearchBlock.module.css';

function SearchBlock({ className, textSave, setTextAction }) {
  const [text, setTextCur] = useState(textSave);
  const history = useHistory();

  useEffect(() => {
    setTextCur(textSave);
  }, [textSave]);

  const handleSearch = () => {
    setTextAction(text);
    history.push(`/documentation/search`); // Переадресация
  };

  return (
    <div className={clsx([styles.search, className])}>
      <input
        value={text}
        type="text"
        placeholder="Поиск"
        className={styles.search_input}
        onChange={(e) => setTextCur(e.target.value)}
      />
      <button
        type="button"
        className={styles.search_btn}
        onClick={() => handleSearch()}
      >
        <Glyph name="Search" />
      </button>
    </div>
  );
}

SearchBlock.propTypes = {
  className: PropTypes.string,
  textSave: PropTypes.string,
  setTextAction: PropTypes.func,
};

SearchBlock.defaultProps = {
  className: '',
  textSave: '',
  setTextAction: () => {},
};

export default SearchBlock;
