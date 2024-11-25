/* eslint-disable no-undef */
import { put } from 'redux-saga/effects';
import { createAction, createReducer } from 'redux-smart-actions';
import { createActionType } from '../Utils';

// Store для главного экрана (списка мероприятий)
const MODULE_NAME = 'reviews';

// Секция с константами типов действий
// инициализация
const INIT_MAIN_TYPE = createActionType(MODULE_NAME, 'init_reviews');

const SET_LOADING = createActionType(MODULE_NAME, 'loading');
const SAVE_CONTENT = createActionType(MODULE_NAME, 'content');

const FETCH_REVIEWS = createActionType(MODULE_NAME, 'fetch_reviews');
const SEND_REVIEWS = createActionType(MODULE_NAME, 'send_reviews');

// Секция с действиями
export const initMainAction = createAction(INIT_MAIN_TYPE, (data) => ({
  payload: data,
}));

export const setLoadingAction = createAction(SET_LOADING, (data) => ({
  payload: data,
}));
export const saveContentsAction = createAction(SAVE_CONTENT, (data) => ({
  payload: data,
}));

export const fetchReviewsAction = createAction(FETCH_REVIEWS, () => ({
  request: {
    url: `/reviews`,
    responseType: 'json',
  },
  meta: {
    onSuccess: (response, action, store) => {
      const { dispatch } = store;
      dispatch(setLoadingAction(false));
      dispatch(saveContentsAction(response.data));
      return response;
    },
    onError: (status, err, store) => {
      const { dispatch } = store;
      dispatch(setLoadingAction(false));
      dispatch(
        addStatusPageAction({
          title: 'Ошибка',
          description: '',
          status: 'error',
        }),
      );
    },
  },
}));

export const sendReviewsAction = createAction(SEND_REVIEWS, (param) => ({
  request: {
    url: `/reviews`,
    responseType: 'json',
    method: 'POST',
    data: param,
  },
  meta: {
    onSuccess: (response, action, store) => {
      const { dispatch } = store;
      dispatch(setLoadingAction(true));
      dispatch(fetchReviewsAction());
      dispatch(
        addStatusPageAction({
          title: 'Успешно',
          description: '',
          status: 'good',
        }),
      );
      return response;
    },
    onError: (status, err, store) => {
      const { dispatch } = store;
      dispatch(setLoadingAction(false));
      dispatch(
        addStatusPageAction({
          title: 'Ошибка',
          description: '',
          status: 'error',
        }),
      );
    },
  },
}));

// Секция с сагами
function* rootSaga() {
  const data = {
    loading: false,
    error: null,
    reviews: [],
  };

  yield put(initMainAction(data));
}

// Секция работы локального хранилища (создаётся при необходимости)
const initialState = '';

const reducer = createReducer(
  {
    [initMainAction]: (state, action) => action.payload,
    [setLoadingAction]: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    [saveContentsAction]: (state, action) => {
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    },
  },
  initialState,
);

export default {
  rootSaga,
  reducer,
};
