import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./DateWidget.css";

const DateWidget = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 10 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const formatedDate = format(date, "dd.MM.yy HH:mm");

  return <div className="time">{formatedDate} Касса #1</div>;
};

export default DateWidget;
