import React from "react";
import SummaryCard from "./SummaryCard.jsx";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const AdminSummary = () => {
  return (
    <div>
      <h3>Dashboard Overview</h3>
      <div
        style={{
          margin :"0px 8%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap : "20px"
        }}
      >
        <SummaryCard
          icon={<FaPeopleGroup />}
          text="Total Employees"
          number={13}
          color={"navy"}
        />
        <SummaryCard
          icon={<HiOutlineBuildingOffice2 />}
          text="Total Departments"
          number={50}
          color={"olive"}
        />
        <SummaryCard
          icon={<FaMoneyBill1Wave />}
          text="Monthly Pay"
          number={22}
          color={"crimson"}
        />
      </div>
    </div>
  );
};

export default AdminSummary;
