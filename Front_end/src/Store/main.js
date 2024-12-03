/* eslint-disable no-undef */
import { put } from "redux-saga/effects";
import { createAction, createReducer } from "redux-smart-actions";
import { createActionType } from "../Utils";

// Store для главного экрана (списка мероприятий)
const MODULE_NAME = "main";

// Секция с константами типов действий
// инициализация
const INIT_MAIN_TYPE = createActionType(MODULE_NAME, "init_main");

const ADD_STATUS_PAGE_TYPE = createActionType(MODULE_NAME, "add_status_page");
const DELETE_STATUS_PAGE_TYPE = createActionType(
  MODULE_NAME,
  "delete_status_page"
);
const UPDATE_INFO_TIME_TYPE = createActionType(MODULE_NAME, "update_info_time");
const SET_SHOW_FEED_BACK = createActionType(MODULE_NAME, "SET_SHOW_FEED_BACK");
const SEND_SHOW_FEED_BACK = createActionType(
  MODULE_NAME,
  "SEND_SHOW_FEED_BACK"
);

// Секция с действиями
export const initMainAction = createAction(INIT_MAIN_TYPE, (data) => ({
  payload: data,
}));

export const addStatusPageAction = createAction(
  ADD_STATUS_PAGE_TYPE,
  (data) => ({
    payload: data,
  })
);
export const deleteStatusPageAction = createAction(
  DELETE_STATUS_PAGE_TYPE,
  (data) => ({
    payload: data,
  })
);
export const setIsOpenReturnFeedBackAction = createAction(
  SET_SHOW_FEED_BACK,
  (data) => ({
    payload: data,
  })
);

export const updatePageAction = createAction(
  UPDATE_INFO_TIME_TYPE,
  (param) => ({
    request: {
      url: `/update-time-page/`, // URL для POST-запроса
      method: "POST", // Метод POST
      responseType: "json", // Ожидаем JSON ответ
      data: param, // Отправляем параметры
    },
    meta: {
      onRequest: () => {
        return {
          url: `/update-time-page/`,
          method: "POST",
          responseType: "json",
          data: param,
        };
      },
      onError: (status, err, store) => {
        const { dispatch } = store;
        dispatch(
          addStatusPageAction({
            title: "Ошибка",
            description: "Время не было зафиксировано",
            status: "error",
          })
        );
      },
    },
  })
);

export const sendFeedBackAction = createAction(
  SEND_SHOW_FEED_BACK,
  (param) => ({
    request: {
      url: `/feedback/`,
      method: "POST",
      responseType: "json",
      data: param,
    },
    meta: {
      onSuccess: (response, action, store) => {
        const { dispatch } = store;
        dispatch(setIsOpenReturnFeedBackAction(false));
        dispatch(
          addStatusPageAction({
            title: "Успешно",
            description: "Обратная связь была принята",
            status: "good",
          })
        );
        return response;
      },
      onError: (status, err, store) => {
        const { dispatch } = store;
        dispatch(
          addStatusPageAction({
            title: "Ошибка",
            description: "Обратная связь не была принята",
            status: "error",
          })
        );
      },
    },
  })
);

// Секция с сагами
function* rootSaga() {
  const data = {
    status: [],
    isOpenReturnFeedBack: false,
  };

  yield put(initMainAction(data));
}

// Секция работы локального хранилища (создаётся при необходимости)
const initialState = "";

const reducer = createReducer(
  {
    [initMainAction]: (state, action) => action.payload,
    [addStatusPageAction]: (state, action) => {
      const arrStatus = [...state.status];
      arrStatus.push({
        id: new Date().toISOString(),
        status: action.payload.status,
        title: action.payload.title,
        description: action.payload.description,
      });
      return {
        ...state,
        status: arrStatus,
      };
    },
    [deleteStatusPageAction]: (state, action) => {
      const arrStatus = [];
      state.status.forEach((status) => {
        if (status.id !== action.payload) {
          arrStatus.push(status);
        }
      });
      return {
        ...state,
        status: arrStatus,
      };
    },
    [setIsOpenReturnFeedBackAction]: (state, action) => {
      return {
        ...state,
        isOpenReturnFeedBack: action.payload,
      };
    },
  },
  initialState
);

export default {
  rootSaga,
  reducer,
};
