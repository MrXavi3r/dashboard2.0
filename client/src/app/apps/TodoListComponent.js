import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { todoData } from "../data";

const TodoListComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(todoData);

  const statusChangedHandler = (event, id) => {
    const todo = { ...todos[id] };
    todo.isCompleted = event.target.checked;

    const todoItems = [...todos];
    todoItems[id] = todo;

    setTodos(todoItems);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const todoItems = [...todos];
    todoItems.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputValue,
      isCompleted: false,
    });
    setTodos(todoItems);
    setInputValue("");
  };

  const removeTodo = (index) => {
    const todoItems = [...todos];
    todoItems.splice(index, 1);

    setTodos(todoItems);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="col-md-12 col-xl-4 grid-margin stretch-card p-0">
      <div className="card bg-light text-dark shadow">
        <div className="card-body">
          <h4 className="card-title text-dark">To do list</h4>
          <form className="add-items d-flex" onSubmit={addTodo}>
            <input
              type="text"
              className="form-control h-auto"
              placeholder="What do you need to do?"
              value={inputValue}
              onChange={inputChangeHandler}
              required
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
          <div className="list-wrapper">
            <ul className="d-flex flex-column todo-list">
              {todos.map((todo, index) => {
                return (
                  <TodoListItem
                    isCompleted={todo.isCompleted}
                    changed={(event) => statusChangedHandler(event, index)}
                    key={todo.id}
                    remove={() => removeTodo(index)}
                  >
                    {todo.task}
                  </TodoListItem>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListComponent;
