import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* pullthoseTemplates(action) {

    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/user/usertemplates/${action.payload}`,
        });

        yield put({
            type: 'SET_TEMPLATE',
            payload: response.data
        })
    } catch (err) {
        console.log('error is ', err)
    }
}

function* templateSaga() {
  yield takeLatest('PULL_TEMPLATES', pullthoseTemplates);
}

export default templateSaga;
