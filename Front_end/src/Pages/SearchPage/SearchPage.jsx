/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { COLOR_LAYER } from '../../Shered/const';

import LightBar from '../../Components/LightBar';
import Panel from '../../Components/Panel';
import Glyph from '../../Components/Glyph';
import ColorPickerСircle from '../../Components/ColorPickerСircle';
import BlockCopy from '../../Components/BlockCopy';

import styles from './SearchPage.module.css';

function SearchPage({ children, contents, searchText, fetchContents }) {
  useEffect(() => {
    fetchContents(searchText);
  }, [searchText]);

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>{children}</div>

      <div className={styles.content}>
        <Panel className={styles.panel}>
          По вашему запросу было найдено {contents.length} элементов
        </Panel>

        {contents?.map((content) => (
          <Panel
            key={content.id}
            className={styles.panel}
            title={content.title}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: highlightText(content.content, searchText),
              }}
            />
          </Panel>
        ))}
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  children: PropTypes.node,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
  searchText: PropTypes.string,
  fetchContents: PropTypes.func,
};

SearchPage.defaultProps = {
  children: '',
  contents: [],
  searchText: '',
  fetchContents: () => {},
};

export default SearchPage;
