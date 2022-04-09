import {connect} from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
	input,
	todos,
	changeInput,
	insert,
	toggle,
	remove,
}) => {
	return(
		<Todos
			input={input}
			todos={todos}
			onChangeInput = {changeInput}
			onInsert = {insert}
			onToggle = {toggle}
			onRemove = {remove}
			/>
	)
};
//비구조화 할당을 통해 todos를 분리하여 store의 state를 생략 하여, state.todos.input 대신 todos.input을 바로 사용
export default connect(
	({todos}) => ({
		input: todos.input,
		todos: todos.todos,
	}),
	{
		changeInput,
		insert,
		toggle,
		remove,
	},
)(TodosContainer);
//TodosContainer에서 위 store에 있는 state와 리듀서함수를 사용할 수 있음