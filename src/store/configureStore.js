import { applyMiddleware, createStore, combineReducers } from "redux";
import * as ActionTypes from "./actionTypes";
import { AddDonor } from "./ActionCreators";
import { Donor } from "./Donor";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  AddDonor: AddDonor,
  Donor: Donor,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
