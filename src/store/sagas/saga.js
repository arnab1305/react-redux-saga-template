import { takeEvery } from "redux-saga/effects";
import { userHandler } from "./handlers/user";

function* MySaga() {
  yield takeEvery("GET_USER", userHandler);
}

export default MySaga;
