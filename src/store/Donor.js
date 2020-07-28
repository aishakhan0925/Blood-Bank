import { DONORS } from "../Shared/donors";
import * as ActionTypes from "./actionTypes";

const initState = {
  donor: DONORS,
};

export const Donor = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DONOR:
      var donor = action.payload;
      donor.id = state.length;
      // return state.concate(donor);
      return {
        donor: [...state.donor, donor],
      };

    default:
      return state;
  }
};
