import React from "react";

import dayjs from "dayjs";

import CalanderNav from "./components/CalenderNav";
import CalanderBody from "./components/CalenderBody";

const Calender = () => {
  let s = dayjs().startOf("month");
  let e = dayjs().endOf("month");
  console.log(s);
  console.log(e);
  return (
    <div>
      <CalanderNav />
      <CalanderBody />
    </div>
  );
};

export default Calender;