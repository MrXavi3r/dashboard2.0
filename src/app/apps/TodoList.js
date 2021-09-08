import React from 'react'
import TodoListComponent from './apps/TodoListComponent'

export const TodoList = () => {
  return (
    <div>
        <div className="page-header">
            <h3 className="page-title">
                Todo List
            </h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
                <li className="breadcrumb-item active" aria-current="page">Todo List</li>
                </ol>
            </nav>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Todo List</h4>
                        <TodoListComponent />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
