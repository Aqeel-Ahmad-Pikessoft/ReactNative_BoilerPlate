import axios from '../../Utils/axiosConfig';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as actions from './slice';

import {Location_WITH_VERSION} from '../../Constants/APIContants/ENDPOINTS';

function* HomeSaga() {
  try {
    const response = yield axios.get(`${Location_WITH_VERSION}`);
    yield put(actions.HomeRequestSuccess(response?.data));
  } catch (error) {
    console.log(error, 'error');
    yield put(actions.HomeRequestFailure(response?.data));
  }
}

export default function* () {
  yield takeLatest(actions.HomeRequest, HomeSaga);
}
