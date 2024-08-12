import React from "react";

import dayjs from "dayjs";

import CalenderNav from "./components/CalenderNav";
import CalenderBody from "./components/CalenderBody";

const Calender = ({ year, month }) => {
  return (
    <div>
      <CalenderNav year={year} month={month - 1} />
      <CalenderBody year={year} month={month - 1} />
    </div>
  );
};

export default Calender;
