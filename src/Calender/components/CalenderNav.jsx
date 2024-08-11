import React from "react";

const CalenderNav = ({ year, month }) => {
  return (
    <div>
      <h1>
        {year}년 {month+1}월
      </h1>
    </div>
  );
};

export default CalenderNav;
