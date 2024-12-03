/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { DEFAULT_DATA_FORM } from "./constants";

import Modal from "../../UiKit/Modal";
import Input from "../../UiKit/Input";
import TextArea from "../../UiKit/TextArea";
import Button from "../../UiKit/Button";
import InputMask from "react-input-mask";

import styles from "./ModalFeedBack.module.css";

function ModalFeedBack({ isOpen, setIsOpen, sendData }) {
  const [formData, setFormData] = useState(DEFAULT_DATA_FORM);

  if (!isOpen) {
    return "";
  }

  return (
    <Modal
      title="Оставить заявку"
      className={styles.modal}
      onModalClose={() => {
        setIsOpen(false);
        setFormData(DEFAULT_DATA_FORM);
      }}
    >
      <div className={styles.modal_content}>
        <Input
          className={styles.input}
          placeholder="Имя"
          onChange={(name) => setFormData({ ...formData, name })}
        />

        <InputMask
          className={styles.input_mask}
          placeholder="Телефон"
          mask="+7 (999) 999 99 99"
          onChange={(telephone) =>
            setFormData({
              ...formData,
              telephone: telephone.currentTarget.value,
            })
          }
        />

        <Input
          className={styles.input}
          placeholder="Почта"
          onChange={(email) => setFormData({ ...formData, email })}
        />

        <TextArea
          className={styles.input}
          placeholder="Пожелания"
          changeText={(type, text) => setFormData({ ...formData, text })}
        />

        <div className={styles.separation} />

        <div className={styles.modal_footer}>
          <Button onClick={() => sendData(formData)}>Отправить</Button>
        </div>
      </div>
    </Modal>
  );
}

ModalFeedBack.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  sendData: PropTypes.func,
};

ModalFeedBack.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
  sendData: PropTypes.func,
};

export default ModalFeedBack;
