/* eslint-disable no-undef */
import { put } from 'redux-saga/effects';
import { createAction, createReducer } from 'redux-smart-actions';
import { createActionType } from '../Utils';

// Store для главного экрана (списка мероприятий)
const MODULE_NAME = 'search';

// Секция с константами типов действий
// инициализация
const INIT_MAIN_TYPE = createActionType(MODULE_NAME, 'init_search');

const SET_LOADING = createActionType(MODULE_NAME, 'loading');
const SAVE_CONTENT = createActionType(MODULE_NAME, 'content');
const SET_TEXT = createActionType(MODULE_NAME, 'set_text');
const FETCH_CONSTNTS = createActionType(MODULE_NAME, 'fetch_contents');

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
export const setTextAction = createAction(SET_TEXT, (data) => ({
  payload: data,
}));

export const fetchContentsAction = createAction(FETCH_CONSTNTS, (param) => ({
  request: {
    url: `/search?query=${param}`,
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
          description: 'Время не было зафиксировано',
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
    search: [],
    text: '',
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
        search: action.payload,
        loading: false,
      };
    },
    [setTextAction]: (state, action) => {
      return {
        ...state,
        text: action.payload,
      };
    },
  },
  initialState,
);

export default {
  rootSaga,
  reducer,
};
