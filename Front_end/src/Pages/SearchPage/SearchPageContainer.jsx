import { connect } from 'react-redux';
import { fetchContentsAction } from '../../Store/search';

import SearchPage from './SearchPage';

function mapStateToProps(state, props) {
  return {
    children: props.children,
    contents: state.search.search,
    searchText: state.search.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContents: (data) => {
      dispatch(fetchContentsAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
