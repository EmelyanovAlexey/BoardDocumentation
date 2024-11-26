/* eslint-disable no-unused-vars */
/* eslint-disable */
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
            В современном мире у большинства школ имеется ограниченный бюджет для
            обеспечения техническим оборудованием классов. Данный проект
            позволяет пользоваться виртуальной интерактивной доской, сократив закупки
            подобного оборудования минимум в 3 раза.
          </p>

          <p>
            Для того чтобы пользоваться нашим продуктом достаточно иметь:
            <ul>
              <li>Проектор</li>
              <li>Веб-камеру</li>
              <li>Лазерную указку</li>
            </ul>
          </p>
        </Panel>

        <Panel className={styles.panel} title="Как это работает?" id="panel_2">
          <div className={styles.panel_content}>
            <div className={styles.w60}>
              <p>
                В видео продемонстрирован пример работы данной программы в
                реальной жизни. Эта программа позволяет взаимодействовать с
                программным обеспечением и рисовать на однотонной рабочей
                поверхности с помощью лазерной указки.
              </p>

              <p>
                Проектор и веб-камера направлены на однотонную поверхность, где
                проектор создает изображение доски, а веб-камера передает
                видеопоток в данное программное обеспечение. Программа с помощью
                машинного зрения распознает лазерный луч и производит
                математические расчеты. После успешного расчета на экран
                проектора выводятся линии, повторяющие траекторию движения
                лазерного указателя.
              </p>

              <p>
                Алгоритм на основе цветовых фильтров реализован таким образом,
                что полученное изображение в формате RGB переводится в
                несколько других форматов (HSV, HLS, RGB). Затем для каждого
                формата применяется соответствующая диапазонная маска,
                выделяющая нужный набор цветовых данных. Также дополнительно
                применяются алгоритмы для уменьшения зашумленности входного
                изображения и даунскейлинга картинки. В совокупности это дает
                устойчивый результат для определения цветового пятна в различных
                условиях освещенности помещения. При этом за счет
                комплексирования различных цветовых пространств снижается
                количество возможных источников ложных срабатываний (фонарик,
                УФ-лампы и подобное, что имеет схожий эффект с лазерной указкой).
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

        <Panel className={styles.panel} title="Выбор цвета лазера" id="panel_3">
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
