import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    
    const {items, clearList, handleDelete, handleEdit} = props;

    return (
        <div>
            <h1> Todo Lists </h1>
            <div style={{display:'flex'}}>
            {
                items.map( (item, index) => {
                    return (
                    <TodoItem 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    body={item.body}
                    // handleDelete={() => handleDelete(item.id)}
                    // handleEdit = {() => handleEdit(item.id)}
                    />
                    )
                })
            }
            </div>

            <button type="button" className="btn btn-danger" onClick={clearList}> Clear List </button>
            
        </div>
    )
}

export default TodoList
