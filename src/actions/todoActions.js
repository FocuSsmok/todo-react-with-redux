import { type } from "os";

let nextTodoId = 5;
export const addTodo = text => {
    return {
        type: "ADD_TODO",
        todo: { id: nextTodoId++, text }
    };
};

export const removeTodo = id => {
    console.log(id);
    return {
        type: "REMOVE_TODO",
        todo: { id: id }
    };
};
