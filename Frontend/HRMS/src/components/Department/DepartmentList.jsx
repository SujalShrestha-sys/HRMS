import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/DepartLink.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import { DepartButtons, columns } from "../../utils/DepartmentHelper.jsx";
import { useEffect } from "react";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [deptLoading, setDepartmentLoading] = useState(true);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  const onDepartmentDelete = (id) => {
    const updated = departments.filter((dept) => {
      return dept._id !== id;
    })
    setDepartments(updated)
    setFilteredDepartments(updated);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          let sno = 1;
          const data = response.data.departments.map((department, index) => ({
            _id: department._id,
            sno: index + 1,
            dept_name: department.dept_name,
          }));
          setDepartments(data);
          setFilteredDepartments(data)
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.data.error);
        }
      } finally {
        setDepartmentLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const filterDepartments = (event) => {
    const records = departments.filter((dept) => {
      return dept.dept_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredDepartments(records);
  };

  return (
    <>
      {deptLoading ? (
        <div>Loading.....</div>
      ) : (
        <div className="department-container">
          <div>
            <h3>Manage Departments</h3>
          </div>

          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search department Name"
              onChange={filterDepartments}
            />
            <Link
              className="btn-department"
              to="/admin-dashboard/add-department"
            >
              Add New Department
            </Link>
          </div>
          <div className="department-table">
            <DataTable
              columns={columns(onDepartmentDelete)}
              data={filteredDepartments}
            ></DataTable>
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentList;
