import { DONORS } from "../Shared/donors";
import * as ActionTypes from "./actionTypes";

export const Donor = (state = DONORS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DONOR:
      var donor = action.payload;
      donor.id = state.length;
      return state.concate(donor);
    default:
      return state;
  }
};
