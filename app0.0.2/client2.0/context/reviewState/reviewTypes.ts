export interface ReviewState {
  addedReview: boolean
  removedReview: boolean
  status: Status
}

interface AddReview {
  type: "ADD_REVIEW"
}

interface RemoveReview {
  type: "REMOVE_REVIEW"
  payload: string // id
}

export type Dispatch = (action: Action) => void

export type Action = RemoveReview | AddReview
