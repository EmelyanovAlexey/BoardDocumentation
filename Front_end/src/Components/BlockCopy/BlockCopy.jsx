import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Glyph from '../Glyph';

import styles from './BlockCopy.module.css';

function BlockCopy({ className, text, title }) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error('Ошибка копирования: ', err);
      });
  };

  return (
    <div className={clsx([styles.root, className])}>
      {title && <div className={styles.title}>{title}</div>}
      <textarea className={styles.textarea}>{text}</textarea>
      <button type="button" onClick={copyText} className={styles.btn}>
        <Glyph className={styles.copy} name="Download" />
      </button>
      {copied && (
        <div className={styles.tooltip}>Текст скопирован в буфер обмена!</div>
      )}
    </div>
  );
}

BlockCopy.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

BlockCopy.defaultProps = {
  className: undefined,
  text: undefined,
  title: undefined,
};

export default BlockCopy;
