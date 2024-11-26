/* eslint-disable no-unused-vars */

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { COLOR_LAYER } from '../../Shered/const';

import LightBar from '../../Components/LightBar';
import Panel from '../../Components/Panel';
import ColorPickerСircle from '../../Components/ColorPickerСircle';

import styles from './HomePage.module.css';

function HomePage() {
  const [selectedColor, setSelectedColor] = useState('red');
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
      videoRef.current.autoPlay = true;
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <img
          className={styles.main_photo}
          src="../../../Img/man_bgc.png"
          alt="main"
        />

        <div className={styles.bgc} />

        <video
          className={styles.main_video}
          ref={videoRef}
          src="../../../Video/1.mp4"
          autoPlay
          muted
          loop
        >
          <track kind="captions" src="../../../Video/1.mp4" default />
        </video>

        <div className={styles.main_info}>
          <div className="container">
            <h1 className={styles.main_title}>
              ВИРТУАЛЬНАЯ ИНТЕРАКТИВНАЯ ДОСКА
            </h1>
          </div>
        </div>
      </div>

      <div className={clsx([styles.section, styles.top_shadow])}>
        <img
          className={styles.fon}
          src="../../../Img/fon_doc_1.png"
          alt="fon_doc_1"
        />

        <div className={styles.section_conent}>
          <div className={styles.title}>Распознавание лазеров</div>

          <div className={styles.color_picker}>
            <ColorPickerСircle
              list={COLOR_LAYER}
              selected={selectedColor}
              onClick={(color) => setSelectedColor(color.id)}
            />
            <LightBar
              className={clsx([styles.layer, styles.layer_1])}
              color={selectedColor}
            />
            <LightBar
              className={clsx([styles.layer, styles.layer_2])}
              color={selectedColor}
            />
            <LightBar
              className={clsx([styles.layer, styles.layer_3])}
              color={selectedColor}
            />
            <LightBar
              className={clsx([styles.layer, styles.layer_4])}
              color={selectedColor}
            />
          </div>
        </div>
      </div>

      <footer>
        <div className={styles.footer_content}>
          <div className={styles.w_100}>
            <div className={clsx([styles.row, styles.w_50])}>
              <div className={styles.footer_label}>Телефон: </div>
              <div className={styles.footer_value}>
                <a href="tel:+78888888888">+ 7 888 888 88 88</a>
              </div>
            </div>
            <div className={clsx([styles.row, styles.w_50])}>
              <div className={styles.footer_label}>Разработчики: </div>
              <div className={styles.footer_value}>
                Шитенко Алина, Бабенко Егор, Емельянов Алексей
              </div>
            </div>
          </div>

          <div className={styles.w_100}>
            <div className={clsx([styles.row, styles.w_50])}>
              <div className={styles.footer_label}>Почта: </div>
              <div className={styles.footer_value}>
                <a href="mailto:pochta@mail.ru?subject=Вопрос">
                  pochta@mail.ru
                </a>
              </div>
            </div>
            <div className={clsx([styles.row, styles.w_50])}>
              <div className={styles.footer_label}>Компания: </div>
              <div className={styles.footer_value}>Название компании</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
