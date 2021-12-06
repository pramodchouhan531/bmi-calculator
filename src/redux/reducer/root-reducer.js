import { combineReducers } from "redux";
import bmireducer from "./bmi";
import bmistatereducer from "./newbmi";

const rootReducer = combineReducers({
    bmireducer,
    bmistatereducer,
});
export default rootReducer;