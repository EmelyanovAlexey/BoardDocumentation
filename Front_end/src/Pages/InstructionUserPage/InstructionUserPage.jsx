/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Panel from '../../Components/Panel';
import Glyph from '../../Components/Glyph';

import styles from './InstructionUserPage.module.css';

function InstructionUserPage({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>

      <div className={styles.content}>
        <Panel className={styles.panel} title="Программа">
          <div className={styles.line}>
            <div>
              Для начало работы вам потребуется скачать програмное обеспечение
              для вашей платформы
            </div>
            <div className={styles.links}>
              <a href="https://github.com/JooudDoo/BoardDrawerRepo/releases/download/v1.0.1/board-drawer.exe">
                <Glyph className={styles.link_icon} name="Windows" />
              </a>

              <a href="https://github.com/JooudDoo/BoardDrawerRepo/releases/download/v1.0.1/board-drawer">
                <Glyph className={styles.link_icon} name="Linux" />
              </a>
            </div>
          </div>
        </Panel>
      </div>
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
