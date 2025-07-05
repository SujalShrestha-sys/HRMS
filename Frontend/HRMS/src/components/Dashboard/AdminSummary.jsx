import React from "react";
import SummaryCard from "./SummaryCard.jsx";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { LuCalendarClock } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
const AdminSummary = () => {
  return (
    <div>
      <h3 style={{fontFamily : "monospace", fontSize : "18px", margin : "40px 0px 0px 40px"}}>Dashboard Overview</h3>
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

      <div style={{marginTop : "40px"}}>
        <h4 style={{fontSize : "18px", fontFamily : "monospace", marginBottom : "10px",  textAlign : "center"}}>Leave Details</h4>

        <div style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
          <div style={{display : "flex", columnGap : "5rem"}}>
          <SummaryCard text="Leave Applied" number={12} icon={<FaFileAlt />} color={"olive"}/>
          <SummaryCard text="Leave Approved" number={1} icon={<TiTick />} color={"green"}/>
          </div>

          <div style={{display : "flex", columnGap : "5rem"}}>
          <SummaryCard text="Leave Pending" number={2} icon={<LuCalendarClock color={"crimson"}/>}/>
          <SummaryCard text="Leave Rejected" number={4} icon={<MdCancel />} color={"maroon"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
