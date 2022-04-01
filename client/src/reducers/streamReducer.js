import _ from "lodash";
import {
  CREATE_STREAM,
  fetch_streams,
  fetch_stream,
  delete_stream,
  edit_stream,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case fetch_stream:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case fetch_streams:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case delete_stream:
      return _.omit(state, action.payload);
    case edit_stream:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
