import React from "react";
import { NavLink } from "react-router-dom";
import { IoSpeedometer } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { IoIosPaper } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import "../styles/Sidebar.css";

const AdminSideBar = () => {
  return (
    <div className="main-section">
      <section className="company-name">
        <h3>HRMS</h3>
      </section>
      <span className="main-menu">Main Menu</span>

      <section className="navlinks">
        <div className="dashboard">
          <NavLink to="/admin-dashboard">
            <IoSpeedometer className="icons" />
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="employees">
          <NavLink to="/">
            <MdOutlineGroups className="icons" />
            <span>Empoloyees</span>
          </NavLink>
        </div>

        <div className="departments">
          <NavLink to="/admin-dashboard/departments">
            <LuBuilding2 className="icons" />
            <span>Departments</span>
          </NavLink>
        </div>

        <div className="leaves">
          <NavLink to="/">
            <IoIosPaper className="icons" />
            <span>Leaves</span>
          </NavLink>
        </div>
        <div className="salary">
          <NavLink to="/">
            <GiMoneyStack className="icons" />
            <span>Salary</span>
          </NavLink>
        </div>

        <div className="settings">
          <NavLink to="/">
            <IoMdSettings className="icons" />
            <span>Settings</span>
          </NavLink>
        </div>
      </section>

      <footer>
        <h4>HRMS @Sujal Shrestha</h4>
        <p>
          Your go to Job Seeking Portal <br />
          feel free to upgrade your worklife.
        </p>
      </footer>
    </div>
  );
};

export default AdminSideBar;
