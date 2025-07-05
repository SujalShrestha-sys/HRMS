import React from 'react'
import "../styles/DepartLink.css"

const AddDepartment = () => {
    return (
        <div className='dep-container'>
            <div className='add-deep-container'>
                <div className='dept-heading'>
                    <h1>Add New Department</h1>
                </div>
                <form action="" className='departmentForm'>
                    <div className='dept-name-div'>
                        <label htmlFor="">Department Name</label>
                        <input type="text" required placeholder='Department Name'/>
                    </div>

                    <div className='dept-desc-div'>
                        <label htmlFor="">Description</label>
                        <textarea placeholder='Description...' rows={6} name="description" id=""></textarea>
                    </div>
                    <button>Add Department</button>
                </form>
            </div>
        </div>

    )
}

export default AddDepartment
