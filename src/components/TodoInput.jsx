import React from 'react'

const TodoInput = () => {

    const changeNote = (e) => {

    }

    return (
        <div>
            <div className="text-center">
            <h1> Todo Input </h1>
            <form style={{width:'500px', margin:'auto'}} onSubmit={ (e) => e.preventDefault()}>

                <div class="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control title" id="title" name="title" defaultValue="" onChange={changeNote} placeholder="Enter note title"/>
                </div>
                <div class="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea className="form-control" id="body" rows="3" name="body" defaultValue="" onChange={changeNote} placeholder="Write a note"></textarea>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-primary mb-3">
                        Add
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default TodoInput
