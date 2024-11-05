/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './HomePage.module.css';

function HomePage() {
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
    </div>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
