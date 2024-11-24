import { connect } from 'react-redux';
import {
  fetchReviewsAction,
  setLoadingAction,
  sendReviewsAction,
} from '../../Store/reviews';

import ReviewsPage from './ReviewsPage';

function mapStateToProps(state) {
  return {
    contents: state.reviews.search,
    searchText: state.reviews.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReviews: (data) => {
      dispatch(setLoadingAction(true));
      dispatch(fetchReviewsAction(data));
    },
    sendReview: (data) => {
      dispatch(sendReviewsAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage);
