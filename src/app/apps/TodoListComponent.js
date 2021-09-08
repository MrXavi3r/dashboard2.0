import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";

let todoData = [
  {
    id: 1,
    task: "Pick up kids from school",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Prepare for presentation",
    isCompleted: true,
  },
  {
    id: 3,
    task: "Print Statements",
    isCompleted: false,
  },
  {
    id: 4,
    task: "Create invoice",
    isCompleted: false,
  },
  {
    id: 5,
    task: "Call John",
    isCompleted: true,
  },
  {
    id: 6,
    task: "Meeting with Alisa",
    isCompleted: false,
  },
];
const TodoListComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(todoData);



  const statusChangedHandler = (event, id) => {
    const todo = {...todos[id]};
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
    <>
      <form className="add-items d-flex" onSubmit={addTodo}>
        <input
          type="text"
          className="form-control h-auto"
          placeholder="What do you need to do today?"
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
    </>
  );
};

export default TodoListComponent;
