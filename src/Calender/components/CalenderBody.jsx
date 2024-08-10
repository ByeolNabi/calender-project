import React from "react";
import "./CalenderBody.css"

import dayjs from "dayjs";

const CalanderBody = ({ year, month }) => {
  let a = dayjs().day(0).format(); // 그 주의 월요일로 감
  let b = dayjs().set("date", 1).day(0).format(); // 그 주의 월요일로 감(첫 주라면 month가 바뀔수도 있음)
  let c = dayjs().date(32).format(); // 다음 월로 넘어감
  let d = dayjs().set("year", year).set("month", month); // 이번 달 calender의 첫 월요일
  let e1 = d.startOf("month").day(0); // 달력의 첫 주의 월요일 날짜
  let e2 = e1.date(); // 달력의 첫 주의 월요일 날짜

  let board = Array.from({ length: 7 * 5 }, (val, idx) => idx); // map을 위한 array 생성

  return (
    <div className="container">
      {board.map((val, idx) => (
        <div key={idx}>
          {e1.date(e2 + val).format()}
          <br />
        </div>
      ))}
      <br />
    </div>
  );
};

export default CalanderBody;

/**
 * dayjs().day() : 요일 {0:일요일}
 * let s = dayjs().startOf('month')
 * let e = dayjs().endOf('month')
 *
 * dayjs().day(0) : 그 주의 일요일 날짜를 가져옴
 * let b = dayjs().set("date", 1).day(0).format();
 *    => 주 단위로 가져오기 때문에 이전 날짜도 가져온다.
 *    => 달의 첫 날의 일요일 가져오기 + 달의 마지막날 토요일 가져오기 >> 날짜 누락은 없음
 * let c = dayjs().date(32).format();
 *    => 날짜가 넘어가면 알아서 이월됨
 * month 는 부터 시작
 *
 * 🤔1 (첫날, 요일) ~ (막날, 요일) 가져오기
 * 🤔2 그 달의 첫주 일요일을 가져와서 date를 4주치까지 더해나가자
 *
 *
 *
 * 날짜 set방법
 * https://day.js.org/docs/en/get-set/get#list-of-all-available-units
 */
