import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { ROUTER_LIST } from '../../Shered/const';

import styles from './Menu.module.css';

function Menu({ className }) {
  return (
    <div className={clsx([styles.root, className])}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="./Img/logo.png" alt="logo" />
        </div>
        <div className={styles.menu}>
          {ROUTER_LIST.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={styles.item_link}
              activeClassName={styles.item_link_active}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: undefined,
};

export default Menu;
