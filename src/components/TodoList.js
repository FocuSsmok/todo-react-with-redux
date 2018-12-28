import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        ...state
    };
};

class TodoList extends React.Component {
    render() {
        const todos = this.props.todosReducer.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
            />
        ));
        console.log(todos);
        return (
            <div>
                <ul>{todos}</ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(TodoList);
