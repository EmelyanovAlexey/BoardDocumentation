/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { COLOR_LAYER } from '../../Shered/const';

import LightBar from '../../Components/LightBar';
import Panel from '../../Components/Panel';
import ColorPickerСircle from '../../Components/ColorPickerСircle';

import styles from './DocumentationPage.module.css';

function HomePage({ children }) {
  const [selectedColor, setSelectedColor] = useState('red');
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>

      <div className={styles.content}>
        <Panel className={styles.panel} title="Виртуальная интерактивная доска">
          asd
        </Panel>

        <Panel className={styles.panel} title="Как это работает?">
          asd
        </Panel>

        <Panel className={styles.panel} title="Выбор цвета лазера">
          <div className={styles.choose_color}>
            <ColorPickerСircle
              list={COLOR_LAYER}
              selected={selectedColor}
              onClick={(color) => setSelectedColor(color.id)}
            />
            <LightBar
              className={styles.choose_color_layer}
              color={selectedColor}
            />
          </div>
        </Panel>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  children: PropTypes.node,
};

HomePage.defaultProps = {
  children: '',
};

export default HomePage;
