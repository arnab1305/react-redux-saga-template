import { call, put } from "redux-saga/effects";
import { getUserApi } from "../requests/userRequest";

export function* userHandler(action) {
  try {
    const response = yield call(getUserApi);
    console.log(response);
    yield put({ type: "FETCH_USER", payload: response });
  } catch (error) {
    return error;
  }
}
