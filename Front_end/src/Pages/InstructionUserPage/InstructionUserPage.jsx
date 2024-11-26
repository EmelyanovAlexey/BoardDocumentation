/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Panel from '../../Components/Panel';
import Glyph from '../../Components/Glyph';

import styles from './InstructionUserPage.module.css';

function InstructionUserPage({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>

      <div className={styles.content}>
        <Panel className={styles.panel} title="Установка">
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

        <Panel className={styles.panel} title="Инструкция">
          <div className={styles.video_block}>
            <video
              className={styles.video_demo}
              src="../../../Video/instruction.mp4"
              autoPlay
              muted
              loop
              controls
            >
              <track
                kind="captions"
                src="../../../Video/instruction.mp4"
                default
              />
            </video>
          </div>

          <Panel className={styles.panel} title="Меню">
            <div className={styles.line}>
              <div className={styles.w60}>
                При запуске приложения вы попадаете в меню, где у пользователья
                есть выбор
                <ul>
                  <li>
                    (Режим рисования) - в данном режиме пользователь переносится
                    в окно где он сможет рисовать благодаря лазерной указке, так
                    же пользователю предоставлен большой спектор настроек и
                    калебровочный режим для комфортной работы с програмным
                    обеспечением
                  </li>
                  <li>(Интерактивный режим) - В разработке</li>
                </ul>
              </div>
              <div className={styles.photo}>
                <img
                  src="../../../Img/instructionMenu.png"
                  alt="instructionMenu"
                />
              </div>
            </div>
          </Panel>

          <Panel className={styles.panel} title="Настройки">
            <div className={styles.line}>
              <div className={clsx([styles.photo, styles.w40])}>
                <img
                  src="../../../Img/instructionSettings.png"
                  alt="instructionSettings"
                />
              </div>

              <div className={styles.w60}>
                В верхнем левом угру располагается кнопка настроек, благодаря
                которой можно отображать и скрывать окно настрое. В настройках
                пользователь может проводить настройки:
                <ul>
                  <li>
                    Настройка ручки - пользователь может выбрать цвет рисунка
                    который будет пофторять движение лазера
                  </li>
                  <li>
                    Настройки цвета - пользователь в данном блоке проводит
                    настройки HUR - (
                    <i>
                      Hue - это три первичных основных цвета-красный, синий и
                      желтый
                    </i>
                    ), насыщение, значение
                  </li>
                  <li>
                    Настройка обработки камеры - пользователь выбирает диапазон
                    FPS - ( <i>частота кадров</i>)
                  </li>
                  <li>
                    Настройки дял отображения - пользователь с помощтю флашков
                    отключает или включает следующие показатели
                    <ul>
                      <li>
                        Показывать картинку с камеры - на экране будет
                        отображаться запись с Веб-камеры
                      </li>
                      <li>
                        Показывать маску лазера - на экране будет отображаться
                        рисунок повторяющий траекторию лазера
                      </li>
                      <li>
                        Отключить рисование - на экране не будет отображаться
                        рисунок повторяющий траекторию лазера, адгоритм не будет
                        провизводить расчеты и отслеживать лазер
                      </li>
                    </ul>
                  </li>
                </ul>
                Все настройки можно сохранять.
              </div>
            </div>
          </Panel>
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
