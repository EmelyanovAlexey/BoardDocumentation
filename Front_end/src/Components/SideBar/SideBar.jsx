/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Glyph from '../Glyph';

import styles from './ContentSlider.module.css';

function ContentSlider({ list }) {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src="../../../Img/laser-beam.jpg" alt="logo" />
      </div>

      <div className={styles.list}>
        {list.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={styles.item_link}
            activeClassName={styles.item_link_active}
            end={link.href !== '/documentation'}
          >
            {link.icon !== undefined && (
              <Glyph className={styles.icon} name={link.icon} />
            )}
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

ContentSlider.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

ContentSlider.defaultProps = {
  list: [],
};

export default ContentSlider;
