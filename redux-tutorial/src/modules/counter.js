import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 기존의 경우
// export const increase = () => ({type: INCREASE});

const initialState = {
	number: 0,
}

//리듀서 함수(redux-action적용)
const counter = handleActions(
	{
		[INCREASE]: (state, action) => ({number: state.number + 1}),
		[DECREASE]: (state, action) => ({number: state.number - 1}),
	},
	initialState,
);

//리듀서 함수(redux-action미적용)
/*function counter(state = initialState, action){
	switch(action.type){
		case INCREASE:
			return{
				number: state.number + 1
			};
		case DECREASE:
			return{
				number: state.number - 1
			};
		default:
			return state;
	}
}*/

export default counter;
