import { connect } from 'react-redux';
import { updatePageAction } from '../../Store/main';

import InstructionWorkPage from './InstructionWorkPage';

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
)(InstructionWorkPage);
