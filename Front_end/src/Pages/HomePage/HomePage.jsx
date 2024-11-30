/* eslint-disable */
/* eslint-disable no-unused-vars */

import clsx from "clsx";
import { default as React, useEffect, useRef, useState } from "react";

import LightBar from "../../Components/LightBar";

import styles from "./HomePage.module.css";

function HomePage() {
  const [selectedColor, setSelectedColor] = useState("brown");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
      videoRef.current.autoPlay = true;
    }
  }, []);

  // Плавный перход по якорьной ссылке
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <img
          className={styles.main_photo}
          src="../../../Img/man_bgc.png"
          alt="main"
        />

        <div className={styles.bgc} />

        <div className={styles.menu}>
          <button type="button" onClick={() => scrollToSection("about")}>
            О продукте
          </button>
          <button type="button" onClick={() => scrollToSection("how_work")}>
            Как работает
          </button>
          <button type="button" onClick={() => scrollToSection("contact")}>
            Контакты
          </button>
        </div>

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

            <div className={styles.main_info_btn}>
              <button className={styles.main_btn} type="button">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className={clsx([styles.section, styles.top_shadow])}>
        <div className={styles.section_product}>
          <div className={styles.title}>Что это такое?</div>
          <div className={styles.description}>
            В современном мире большинство школ имеет ограниченный бюджет для
            обеспечения техническим оборудованием классов. Наш продукт помогает
            сократить закупки подобного оборудования минимум в 3 раза. Программа
            позволяет взаимодействовать с программным обеспечением и рисовать на
            однотонной рабочей поверхности с помощью лазерной указки.
          </div>

          <div className={styles.advantages}>
            <div className={styles.advantage}>
              <h2>Экономия средств</h2>
              <p>
                При закупке оборудования во все школы наш продукт экономит 11.5
                млрд. рублей по сравнению со смарт-досками
              </p>
            </div>

            <div className={styles.advantage}>
              <h2>7 дней</h2>
              <p>
                - бесплатный тестовый период. Если вам не понравится товар, мы
                вернем вам деньги.
              </p>
            </div>

            <div className={styles.advantage}>
              <h2>Интересные уроки</h2>
              <p>
                Использование лазерной указки для взаимодействия с доской
                привлечет даже самых спящих учеников!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section_content}>
          <div id="how_work" className={styles.title}>
            Как это работает?
          </div>

          <div className={styles.color_picker}>
            <div className={styles.instruction_block}>
              <div className={styles.photo}>
                <img
                  src="../../../Img/instructionMenu.png"
                  alt="instructionMenu"
                />
              </div>
              <div className={styles.instruction_text}>
                Запускай приложение и нажимай{" "}
                <span className={styles.yellow_text}>“Режим рисования”</span>.
              </div>
            </div>

            <div className={styles.instruction_block}>
              <div className={styles.instruction_text}>
                В настройках выбирай нужный{" "}
                <span className={styles.yellow_text}>цвет</span> лазера.
              </div>
              <div className={styles.photo}>
                <img
                  src="../../../Img/instructionSettings.png"
                  alt="instructionSettings"
                />
              </div>
            </div>

            <div className={styles.instruction_block}>
              <video
                className={styles.photo}
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
              <div className={styles.instruction_text}>
                Наведи свой лазер на экран проектора и{" "}
                <span className={styles.yellow_text}>рисуй на нем</span>{" "}
                движением руки!
              </div>
            </div>

            <LightBar
              className={clsx([styles.layer, styles.layer_1])}
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

      <footer id="contact">
        <div className={styles.footer_content}>
          <div className={styles.w_100}>
            <div className={clsx([styles.row, styles.w_50])}>
              <div className={styles.footer_label}>Telegram: </div>
              <div className={styles.footer_value}>
                <a href="tg://resolve?domain=alincnl">@alincnl</a>
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
                <a href="mailto:e.babenko1@g.nsu.ru?subject=Вопрос">
                  e.babenko1@g.nsu.ru
                </a>
              </div>
            </div>
            <div className={clsx([styles.row, styles.w_50])}>
              <div className={styles.footer_label}>Команда: </div>
              <div className={styles.footer_value}>BoardDrawer</div>
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
