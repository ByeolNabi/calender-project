import React from "react";

import dayjs from "dayjs";

import CalanderNav from "./components/CalenderNav";
import CalanderBody from "./components/CalenderBody";

const Calender = ({ year, month }) => {
  return (
    <div>
      <CalanderNav year={year} month={month-1} />
      <CalanderBody year={year} month={month-1} />
    </div>
  );
};

export default Calender;
