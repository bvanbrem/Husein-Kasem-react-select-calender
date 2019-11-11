import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar, DateRangePicker } from "react-date-range";

export const DatePicker = () => {

  const [myDate, setMyDate] = useState(new Date());


  const handleSelect = date => {
    console.log(date); // native Date object
    setMyDate(date);
  };

  
  return <Calendar date={myDate} onChange={handleSelect} />;
};

export const RangePicker = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = ranges => {
    console.log(ranges);
    setSelectionRange(Object.assign({}, selectionRange, ranges));
    // {
    // 	selection: {
    // 		startDate: [native Date Object],
    // 		endDate: [native Date Object],
    // 	}
    // }
  };

  

  return <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />;
};
