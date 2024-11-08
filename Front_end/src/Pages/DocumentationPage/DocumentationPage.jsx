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
          <p>
            В современном мире в большенстве школах имеют ограниченый бюджет для
            обеспечения технической аппаратурой в классах. Данный проект
            позволяет пользоваться интерактивной доской сократив закупки
            подобного оборудования (smart deck) минимум в 3 раза.
          </p>

          <p>
            Для того что бы пользоваться нашем продуктом достаточно иметь:
            <ul>
              <li>Проектор</li>
              <li>Веб-камера</li>
              <li>Лазерная указка</li>
            </ul>
          </p>
        </Panel>

        <Panel className={styles.panel} title="Как это работает?">
          <div className={styles.panel_content}>
            <div className={styles.w60}>
              <p>
                В видео продемонстрировано пример работы данной программы в
                реальной жизни. Данная программа позволяет взаимодействовать с
                програмным обеспечением и рисовать на однотонной рабочей
                поверхности через лазерную указку.
              </p>

              <p>
                Проектор и веб-камера направлены на однотонную поверхность, где
                проектор эмитирует поверхность доски, а вебкамера транслирует
                видопоток в данное програмное обеспечение. Программа путем
                машинного зрения распознает лазерный луч и производит
                математические расчеты. Далее после успешного расчета, на экран
                проетора выводятся линии повторяющие траекторию движения
                лазерного указателя.
              </p>
            </div>

            <div className={styles.w30}>
              <video
                className={styles.video_demo}
                src="../../../Video/demoVideo1.mp4"
                autoPlay
                muted
                loop
              >
                <track
                  kind="captions"
                  src="../../../Video/demoVideo1.mp4"
                  default
                />
              </video>
            </div>
          </div>
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
