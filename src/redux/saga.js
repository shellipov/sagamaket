import { takeEvery, put, call } from "redux-saga/effects";
import { START_LOADING } from "./actionTypes";
import { successfulLoading, loadingError } from "./actions";
import { API } from "../api/api";

async function getData() {
  return await API.get(
    `forecast?appid=ce1fe59a97e1d3ca691fd2a7a7a2db8a&q=Moscow&units=metric&lang=ru`,
    {}
  );
}

function* worker() {
  try {
    const data = yield call(getData);
    yield put(successfulLoading(data.data.list));
  } catch (err) {
    yield put(loadingError(err.message));
  }
}

export default function* watcher() {
  yield takeEvery(START_LOADING, worker);
}
