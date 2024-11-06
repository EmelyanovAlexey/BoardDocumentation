/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Panel from '../../Components/Panel';
import BlockCopy from '../../Components/BlockCopy';

import styles from './InstructionWorkPage.module.css';

function InstructionWorkPage({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>

      <div className={styles.content}>
        <Panel className={styles.panel} title="Программа">
          <p>Программа для обработки лазера написана на языке Python</p>

          <p>
            Для начало работы нужно
            <ul>
              <li>
                <p>Склонировать проект</p>
                <BlockCopy text="git clone git@github.com:EmelyanovAlexey/BoardDocumentation.git" />
              </li>
              <li>
                <p>Подготовка среды</p>
                <BlockCopy title="windows" text="pip install uv" />
                <BlockCopy title="linux" text="uv venv --python 3.12" />
              </li>
              <li>
                <p>Активизировать окружающую среду</p>
                <BlockCopy text=".\.venv\Scripts\activate" />
                <BlockCopy text="source .\.venv\bin\activate" />
              </li>
              <li>
                <p>Установка зависимостей</p>
                <BlockCopy text="uv pip install -e .[dev]" />
                <BlockCopy text="pre-commit install" />
              </li>
              <li>
                <p>Запуск</p>
                <BlockCopy text="board-drawer" />
              </li>
            </ul>
          </p>
        </Panel>

        <Panel className={styles.panel} title="Front-end">
          <p>
            Front-end написан на языке JS с использование библиотеки React.js,
            Redux, Saga
          </p>

          <p>
            Для начало работы нужно
            <ul>
              <li>
                <p>
                  Установить актуальную версию node.js по данной{' '}
                  <a href="https://nodejs.org/en">ссылке</a>
                </p>
              </li>
              <li>
                <p>Склонировать проект</p>
                <BlockCopy text="git clone git@github.com:EmelyanovAlexey/BoardDocumentation.git" />
              </li>
              <li>
                <p>Установить yarn</p>
                <BlockCopy text="npm i yarn" />
              </li>
              <li>
                <p>Перейти в каталог</p>
                <BlockCopy text="cd Front_end" />
              </li>
              <li>
                <p>Установка зависимостей</p>
                <BlockCopy text="yarn install --openssl-legacy-provider" />
              </li>
              <li>
                <p>Запуск</p>
                <BlockCopy
                  title="bash терминал"
                  text="export NODE_OPTIONS=--openssl-legacy-provider"
                />
                <BlockCopy text="yarn start" />
              </li>
            </ul>
          </p>
        </Panel>
      </div>
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
