/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// import { deleteStatusPageAction } from '../Store/main';

import { ROUTER_LIST_DOCUMENTATION } from '../Shered/const';

import SearchBlock from '../Components/SearchBlock';

function mapStateToProps() {
  return {
    list: ROUTER_LIST_DOCUMENTATION,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (data) => {
      // dispatch(deleteStatusPageAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
