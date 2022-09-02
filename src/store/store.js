import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middleware = [logger];
const composedEnh = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnh);
