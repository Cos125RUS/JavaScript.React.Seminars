import createSagaMiddleware from "redux-saga";
import {call, put, takeLatest, delay} from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

function* fetchUserApi(action) {
    try {
        const data = yield call(() =>
            fetch(`https://jsonplaceholder.typicode.com/users/${action.payload.id}`)
                .then(response => response.json()));
        console.log(data);
        delay(2000);
        yield put({type: 'USER_DATA_LOADED', payload: data});
    } catch (e) {
        console.log(e.message);
        yield put({type: 'USER_DATA_LOAD_FAILED', payload: e.message});
    }
}

function* userSaga() {
    yield takeLatest("FETCH_USER_REQUESTED", fetchUserApi);
}
export default userSaga;