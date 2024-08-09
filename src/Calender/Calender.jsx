import React from "react";

import dayjs from "dayjs";

import CalanderNav from "./components/CalenderNav";
import CalanderBody from "./components/CalenderBody";

const Calender = () => {
  return (
    <div>
      <CalanderNav />
      <CalanderBody year={2024} month={7} />
    </div>
  );
};

export default Calender;
