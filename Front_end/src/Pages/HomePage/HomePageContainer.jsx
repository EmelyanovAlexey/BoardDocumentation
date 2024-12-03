import { connect } from "react-redux";
import { setIsOpenReturnFeedBackAction } from "../../Store/main";

import HomePage from "./HomePage";

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setIsOpenReturnFeedBack: (data) => {
      dispatch(setIsOpenReturnFeedBackAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
