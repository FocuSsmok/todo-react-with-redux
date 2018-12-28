import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(addTodo(text));
        }
    };
};

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = { value: "" };
    }
    handleInput(e) {
        this.setState({ value: e.target.value });
    }

    addTodo(e) {
        e.preventDefault();
        const value = this.state.value;
        if (value !== "") {
            this.props.addTodo(value);
            this.setState({ value: "" });
        }
    }

    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="todo" />
                    <input
                        type="text"
                        id="todo"
                        value={this.state.value}
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <button onClick={this.addTodo}>Dodaj zadanie</button>
                </div>
            </form>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
