import { connect } from 'react-redux';
import { updatePageAction } from '../../Store/main';

import InstructionUserPage from './InstructionUserPage';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    updateTime: (data) => {
      dispatch(updatePageAction(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InstructionUserPage);
