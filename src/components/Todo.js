import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions/todoActions";

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: id => {
            dispatch(removeTodo(id));
        }
    };
};

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(e) {
        this.props.removeTodo(this.props.id);
    }
    render() {
        return (
            <li>
                {this.props.text}{" "}
                <span className="close" onClick={this.removeTodo}>
                    X
                </span>
            </li>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Todo);
