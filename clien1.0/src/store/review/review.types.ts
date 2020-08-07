export interface ReviewState {
  reviews: Review[];
  singleReview: Review;
  status: Status;
}

export interface GetReviews {
  type: "GET_REVIEWS";
  payload: Review[];
}

export interface GetSingleReview {
  type: "GET_SINGLE_REVIEW";
  payload: Review;
}

export type Action = GetReviews | GetSingleReview;
