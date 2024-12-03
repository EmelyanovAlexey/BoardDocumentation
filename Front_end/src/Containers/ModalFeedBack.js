/* eslint-disable no-unused-vars */
import { connect } from "react-redux";
import {
  setIsOpenReturnFeedBackAction,
  sendFeedBackAction,
} from "../Store/main";

import ModalFeedBack from "../Components/ModalFeedBack";

function mapStateToProps(state) {
  return {
    isOpen: state.main.isOpenReturnFeedBack,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setIsOpen: (data) => {
      dispatch(setIsOpenReturnFeedBackAction(data));
    },
    sendData: (data) => {
      dispatch(sendFeedBackAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFeedBack);
