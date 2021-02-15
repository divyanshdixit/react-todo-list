import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    return (
        <div>
            <h1> Todo Lists </h1>
            <TodoItem/>
            <div className="card" style={{width: '18rem'}}>
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text"> Body </p>
                    <button type="button" className="btn btn-danger">
                        Delete
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-primary">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoList
