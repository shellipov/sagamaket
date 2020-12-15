import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "./reducers/mainReducer";
import thunk from "redux-thunk";
import reduxSaga from 'redux-saga';
import {all} from 'redux-saga/effects'
import Saga from './saga';

const  sagaMiddleware = reduxSaga()

const store = createStore(
  combineReducers({
    main: mainReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk,sagaMiddleware))
);

sagaMiddleware.run(
 function* (){
  yield all(
    [
      Saga()
    ]
  )
 }
)

export default store;
