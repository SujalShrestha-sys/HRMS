import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDepartment = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        if(!token){
          setError("Unauthorized access. Please log in.")
          return
        }


        const response = await axios.get(
          `http://localhost:3000/api/department/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);

        if (response.data.success) {
          setDepartment(response.data.department);
        }else{
          setError("Failed to fetch department details")
        }

      } catch (error) {
        if (error.response && !error.response.data.success) {
          console.error(error);
          alert("Error updating department");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("")

    try {
      const response = await axios.put(
        `http://localhost:3000/api/department/${id}`,
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        alert("Department updsted successfully")
        navigate("/admin-dashboard/departments")
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        console.error(error);
        alert("Error fetching department data");
      }
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="dep-container">
          <div className="add-deep-container">
            <div className="dept-heading">
              <h1>Edit Department</h1>
            </div>
            <form className="departmentForm" onSubmit={handleSubmit}>
              <div className="dept-name-div">
                <label>Department Name</label>
                <input
                  type="text"
                  required
                  name="dept_name"
                  value={department.dept_name || ""}
                  onChange={handleChange}
                  placeholder="Department Name"
                />
              </div>

              <div className="dept-desc-div">
                <label>Description</label>
                <textarea
                  placeholder="Description..."
                  rows={6}
                  value={department.description || ""}
                  onChange={handleChange}
                  name="description"
                ></textarea>
              </div>
              <button type="submit">Edit Department</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditDepartment;
