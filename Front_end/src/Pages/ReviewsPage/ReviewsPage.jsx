/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { DEFAULT_DATA_FORM } from './constants';

import Button from '../../UiKit/Button';
import Input from '../../UiKit/Input';
import Modal from '../../UiKit/Modal';
import TextArea from '../../UiKit/TextArea';
import Panel from '../../Components/Panel';
import Glyph from '../../Components/Glyph';
import ReviewCard from '../../Components/ReviewCard';

import styles from './ReviewsPage.module.css';

function ReviewsPage({ reviews, fetchReviews, sendReview }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA_FORM);

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSendReview = () => {
    sendReview({ ...formData, date: new Date() });
  };

  return (
    <div className={styles.page}>
      {isOpenModal && (
        <Modal
          title="Оставит отзыв"
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

            <TextArea
              className={styles.input}
              placeholder="Отзыв"
              onChange={(text) => setFormData({ ...formData, text })}
            />

            <div className={styles.starts}>
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <button
                    type="button"
                    className={styles.btn_star}
                    onClick={() =>
                      setFormData({ ...formData, rating: index + 1 })
                    }
                  >
                    <Glyph
                      key={+index}
                      className={clsx([
                        styles.stars_icon,
                        formData.rating > index && styles.stars_icon_selected,
                      ])}
                      name="Star"
                    />
                  </button>
                ))}
            </div>

            <div className={styles.separation} />

            <div className={styles.modal_footer}>
              <Button
                disabled={formData.name === '' || formData.text === ''}
                onClick={() => handleSendReview()}
              >
                Отправить
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <div className={styles.content}>
        <Panel title="Отзывы">
          <div className={clsx([styles.row])}>
            <div className="">/</div>
            <Button onClick={() => setIsOpenModal(true)}>Добаыить отзыв</Button>
          </div>
        </Panel>

        <Panel className={clsx([styles.reviews])}>
          {reviews.length === 0 && 'Отзывов не найдено'}
          {reviews.map((review, index) => (
            <div key={+index}>
              <ReviewCard
                title={review.title}
                text={review.text}
                rating={review.rating}
                date={review.date}
              />
            </div>
          ))}
        </Panel>
      </div>
    </div>
  );
}

ReviewsPage.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number,
      date: PropTypes.string,
    }),
  ),
  fetchReviews: PropTypes.func,
  sendReview: PropTypes.func,
};

ReviewsPage.defaultProps = {
  reviews: [],
  fetchReviews: () => {},
  sendReview: () => {},
};

export default ReviewsPage;
