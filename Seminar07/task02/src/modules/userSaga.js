import createSagaMiddleware from "redux-saga";
import {call, put, takeLatest, delay} from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

const fetchUserRequest = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json());
}
function* loadUser(action) {
    try {
        const data = yield call(() => fetchUserRequest(action.payload.id));
        delay(2000);
        yield put({type: 'user/userDataLoading', payload: data});
        // yield put({type: 'USER_DATA_LOADED', payload: data});
    } catch (error) {
        yield put({type: 'user/userDataLoadFail', payload: error});
        // yield put({type: 'USER_DATA_LOAD_FAILED', payload: e.message});
    }
}

function* userSaga() {
    yield takeLatest("FETCH_USER_REQUESTED", loadUser);
}
export default userSaga;