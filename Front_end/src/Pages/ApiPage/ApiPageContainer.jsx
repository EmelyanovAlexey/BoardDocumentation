/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { fetchApiAction, loadingApiAction } from '../../Store/api';

import ApiPage from './ApiPage';

function mapStateToProps(state, props) {
  return {
    docs: state.api.data,
    loading: state.api.loading,
    children: props.children,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchApi: (data) => {
      dispatch(fetchApiAction(data));
      dispatch(loadingApiAction(true));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiPage);
