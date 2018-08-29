import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import todoListSaga from './sagas';

// 创建一个saga中间件
const sagaMiddleware = createSagaMiddleware();

// 引入thunk并且不影响redux devtools的使用
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

// 生成stroe的函数
// Redux中的store是唯一的
const store = createStore(reducer, enhancer);

// 运行todoListSaga中间件
sagaMiddleware.run(todoListSaga);

export default store;
