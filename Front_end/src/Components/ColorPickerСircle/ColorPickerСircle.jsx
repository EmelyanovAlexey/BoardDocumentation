/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ColorPickerСircle.module.css';

function ColorPickerСircle({ className, list, selected, onClick }) {
  return (
    <div className={clsx([styles.root, className])}>
      {list.map((color) => (
        <button
          key={color.id}
          type="button"
          className={clsx([
            styles.circle_btn,
            selected === color.id && styles.circle_btn_active,
          ])}
          onClick={() => onClick(color)}
        >
          <div
            style={{
              backgroundColor: color.color,
              boxShadow: `0px 1px 10px 4px ${color.color}`,
            }}
            className={styles.circle}
          />
          <div className={styles.name}>{color.name}</div>
        </button>
      ))}
    </div>
  );
}

ColorPickerСircle.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  selected: PropTypes.string,
  onClick: PropTypes.func,
};

ColorPickerСircle.defaultProps = {
  className: PropTypes.string,
  list: [],
  selected: '',
  onClick: () => {},
};

export default ColorPickerСircle;
