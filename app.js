import { connect } from './connect';

let AddTodo = ({ todos }) => {
  console.log(todos);
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)