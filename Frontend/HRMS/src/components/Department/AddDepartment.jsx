import React, { useState } from "react";
import "../styles/DepartLink.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dept_name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data:", department);
    console.log("Token:", localStorage.getItem("token"));

    try {
      const response = await axios.post(
        "http://localhost:3000/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Full response:", response);

      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
/*       console.error("Full error:", error);
      console.error("Error response:", error.response?.data); */
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
        console.log("AN ERROR OCCURED", error)
      }
    }
  };
  return (
    <div className="dep-container">
      <div className="add-deep-container">
        <div className="dept-heading">
          <h1>Add New Department</h1>
        </div>
        <form className="departmentForm" onSubmit={handleSubmit}>
          <div className="dept-name-div">
            <label htmlFor="">Department Name</label>
            <input
              type="text"
              required
              name="dept_name"
              value={department.dept_name}
              onChange={handleChange}
              placeholder="Department Name"
            />
          </div>

          <div className="dept-desc-div">
            <label htmlFor="">Description</label>
            <textarea
              placeholder="Description..."
              rows={6}
              name="description"
              value={department.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button>Add Department</button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
