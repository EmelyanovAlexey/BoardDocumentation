/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Modal from "../../UiKit/Modal";
import Input from "../../UiKit/Input";
import TextArea from "../../UiKit/TextArea";
import Button from "../../UiKit/Button";

import styles from "./ModalFeedBack.module.css";

function ModalFeedBack({ isOpen, setIsOpen, sendData }) {
  const [formData, setFormData] = useState({});

  if (!isOpen) {
    return "";
  }

  return (
    <Modal
      title="Оставить заявку"
      className={styles.modal}
      onModalClose={() => {
        setIsOpenModal(false);
        setFormData(DEFAULT_DATA_FORM);
      }}
    >
      <div className={styles.modal_content}>
        <Input
          className={styles.input}
          placeholder="Имя"
          onChange={(text) => setFormData({ ...formData, name: text })}
        />

        <Input
          className={styles.input}
          placeholder="Телефон"
          onChange={(text) => setFormData({ ...formData, name: text })}
        />

        <Input
          className={styles.input}
          placeholder="Почта"
          onChange={(text) => setFormData({ ...formData, name: text })}
        />

        <TextArea
          className={styles.input}
          placeholder="Пожелания"
          changeText={(type, text) => setFormData({ ...formData, text })}
        />

        <div className={styles.separation} />

        <div className={styles.modal_footer}>
          <Button
            disabled={formData.name.replaceAll(" ", "") === ""}
            onClick={() => handleSendReview()}
          >
            Отправить
          </Button>
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
