import { createStore } from 'redux';

// State 초기 값 
const initialState = {
  name : 'carrots',
  age : 25
};

// reducer 선언
// 얘는 좀 있다가 설정해주겠다. 보통은 많은 reducer를 선언하고 combineReducers로
// 1개의 reducer로 결합하여 store에 설정해준다.
const reducer = (state = initialState, action: any) => {
  return state;
}

// store 생성
// 기본적으로 redux는 1개의 reducer를 주입해야한다.
const store = createStore(reducer);

export default store; 