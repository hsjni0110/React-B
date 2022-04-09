import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT ='todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';


export const changeInput = createAction(CHANGE_INPUT, (input)=> input);

let id = 3;
export const insert = createAction(INSERT, (text)=>({
	id: id++,
	text,
	done: false,
}));


export const toggle = createAction(TOGGLE,(id)=>id);
export const remove = createAction(REMOVE,(id)=>id);

const initialState = {
	input: '',
	todos: [
		{
			id:1,
			text:'리덕스 기초 배우기',
			done: true,
		},
		{
			id:2,
			text: '리액트와 리덕스 사용하기',
			done: false,
		}
	]
}

const todos = handleActions(
{
	[CHANGE_INPUT]: (state, { payload:input }) => 
		produce(state, (draft)=>{
			draft.input = input;
		}),
	[INSERT]: (state,{ payload:todo }) => 
		produce(state, (draft) => {
			draft.todos.push(todo);
		}),
	[TOGGLE]: (state,{payload:id}) =>
		produce(state, (draft) => {
			const todo = draft.todos.find((todo) => todo.id === id);
			todo.done = !todo.done;
		}),
	[REMOVE]: (state,{payload:id}) => 
		produce(state, (draft) => {
			const index = draft.todos.findIndex((todo) => todo.id === id);
			draft.todos.splice(index, 1);
		}),
},initialState
)
/*
const todos = handleActions(
{
	[CHANGE_INPUT]: (state, { payload:input }) => ({...state,input }),
	[INSERT]: (state,{ payload:todo }) => ({
		...state,
		todos: state.todos.concat(todo),
	}),
	[TOGGLE]: (state,{payload:id}) => ({
		...state,
		todos: state.todos.map((todo) =>
			todo.id === id? { ...todo, done: !todo.done } : todo,
			),
	}),
	[REMOVE]: (state,{payload:id}) => ({
		...state,
		todos: state.todos.filter((todo)=>todo.id !== id),
	}),
},initialState
)
*/
//payload는 추가 데이터 값이지만, 모든 추가 데이터 값을 action.payload로 사용하면 헷갈린다. 따라서, 객체 비구조화 할당 문법으로
//이름을 새로 지정해주는 것이좋다.

export default todos;