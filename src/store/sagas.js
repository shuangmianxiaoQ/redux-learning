import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';

function* getInitList() {
  try {
    const res = yield axios.get(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );
    const data = res.data.map(item => item.title);
    const action = initListAction(data);
    yield put(action);
  } catch (e) {
    console.log('网络请求失败');
  }
}

function* todoListSaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoListSaga;
