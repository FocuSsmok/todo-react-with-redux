const initialState = {
    todos: [{ id: 1, text: "sample todo", completed: false }]
};

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
            break;
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.todo.id)
            };
            break;
        }
        case COMPLETE_TODO: {
            return {
                ...state
                // todos: state.todos.filter(item)
            };
            break;
        }
        default:
            break;
    }
    return state;
};

export default todosReducer;
