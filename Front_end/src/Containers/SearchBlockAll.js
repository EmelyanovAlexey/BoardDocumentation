/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { setTextAction } from '../Store/search';

import SearchBlock from '../Components/SearchBlock';

function mapStateToProps(state) {
  return {
    textSave: state.search.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTextAction: (data) => {
      dispatch(setTextAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
