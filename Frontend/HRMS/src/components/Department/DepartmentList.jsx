import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/DepartLink.css"

const DepartmentList = () => {
  return (
     <div className='department-container'>
      <div>
        <h3>Manage Departments</h3>
      </div>

      <div className='searchContainer'>
        <input type="text" placeholder='Search department Name'/>
        <Link className='btn-department' to="/admin-dashboard/add-department">Add New Department</Link>
      </div>
    </div>
  )
}

export default DepartmentList
