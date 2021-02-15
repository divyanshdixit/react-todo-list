import React from 'react'

const TodoInput = (props) => {

    const {item, handleChange, handleSubmit, editItem} = props;

    return (
        <div>
            <div className="text-center">
            <form style={{width:'500px', margin:'auto'}} onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control title" id="title" name="title" value={item.title} onChange={handleChange} placeholder="Enter note title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea className="form-control" id="body" rows="3" name="body" value={item.body} onChange={handleChange} placeholder="Write a note"></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className={editItem ?  ' btn btn-success ' : 'btn btn-primary'} disabled={(item.title && item.body) ? false : true}>
                       {editItem ? 'Edit item' : 'Add Item'}
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default TodoInput
