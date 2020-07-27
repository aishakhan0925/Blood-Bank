import * as ActionTypes from "./actionTypes";
import { DONORS } from "../Shared/donors";

export const AddDonor = (
  id,
  firstname,
  lastname,
  email,
  telnum,
  age,
  city,
  country,
  bloodGroup
) => ({
  type: ActionTypes.ADD_DONOR,
  payload: {
    id: id,
    firstname: firstname,
    lastname: lastname,
    email: email,
    telnum: telnum,
    age: age,
    city: city,
    country: country,
    bloodGroup: bloodGroup,
  },
});
