import React, {useContext} from 'react'
import {TodoContext} from '../App';

const TodoItem = (props) => {
    
    const {title, body, handleDelete, handleEdit, id} = props;

    const ItemContext = useContext(TodoContext);
    // array destructuring for context value
    const [DeleteFunc, EditFunc] = ItemContext;

    return (
        
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {body} </p>
                    <button type="button" className="btn btn-danger" onClick={() => DeleteFunc(id)}>
                        Delete
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-primary" onClick={() => EditFunc(id)}>
                        Edit
                    </button>
                </div>
            </div>
        
    )
}

export default TodoItem
