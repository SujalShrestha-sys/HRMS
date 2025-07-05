import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import AdminSideBar from "../components/dashboard/AdminSideBar";
import Navbar from "../components/Dashboard/Navbar";
/* import AdminSummary from "../components/Dashboard/AdminSummary"; */
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="primary-container">
        <AdminSideBar />
        <div className="dashboard-area">
          <div className="nav-container">
            <Navbar />
            <Outlet/>
          </div>
         {/*  <div className="admin-summary">
            <AdminSummary />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
