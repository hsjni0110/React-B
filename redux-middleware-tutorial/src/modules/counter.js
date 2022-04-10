import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => (dispatch) =>{
	setTimeout(()=>{
		dispatch(increase());
	},1000);
};
// dispatch라는 파라미터를 가진 함수를 반환하는 함수, 즉 원하는 때에 함수를 실행하면, 원하는 때에 내부 함수를 실행할 수 있다.
export const decreaseAsync = () => (dispatch) =>{
	setTimeout(()=>{
		dispatch(decrease());
	},1000);
};
const initialState = 0;

const counter = handleActions(
	{
		[INCREASE]: (state) => state + 1,
		[DECREASE]: (state) => state - 1,
	},
	initialState
);

export default counter;