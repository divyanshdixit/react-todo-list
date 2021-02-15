import React from 'react'

const TodoItem = (props) => {
    
    const {title, body, handleDelete, handleEdit} = props;

    return (
        
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {body} </p>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>
                        Delete
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-primary" onClick={handleEdit}>
                        Edit
                    </button>
                </div>
            </div>
        
    )
}

export default TodoItem
