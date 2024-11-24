import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Glyph from '../Glyph';

import styles from './ReviewCard.module.css';

function ReviewCard({
  className,
  title = '',
  text = '',
  rating = 4,
  date = '',
}) {
  return (
    <div className={clsx([styles.root, className])}>
      <div className={styles.bar}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.text}>{text}</div>

      <div className={styles.footer}>
        <div className={styles.stars}>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Glyph
                key={+index}
                className={clsx([
                  styles.stars_icon,
                  rating > index && styles.stars_icon_selected,
                ])}
                name="Star"
              />
            ))}
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
};

ReviewCard.defaultProps = {
  className: undefined,
  title: undefined,
  text: undefined,
  rating: undefined,
  date: undefined,
};

export default ReviewCard;
