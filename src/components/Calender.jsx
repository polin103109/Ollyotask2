import React,{useState} from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../styles/Calender.css";
import { format,
    startOfWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
    subMonths,
    addMonths} from "date-fns";

function Calender() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeDate, setActiveDate] = useState(new Date());
    const getHeader = () => {
        return (
            
                <div class="header">
                  <div
                    className="todayButton"
                    onClick={() => {
                      setSelectedDate(new Date());
                      setActiveDate(new Date());
                    }}
                  >
                    Today
                  </div>
                  <AiOutlineLeft
                    className="navIcon"
                    onClick={() => setActiveDate(subMonths(activeDate, 1))}
                  />
                  <AiOutlineRight
                    className="navIcon"
                    onClick={() => setActiveDate(addMonths(activeDate, 1))}
                  />
                  <h2 className="currentMonth">{format(activeDate, "MMMM yyyy")}</h2>
                </div>
            
          );

    };
  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div className="day weekNames">
          {format(addDays(weekStartDate, day), "E")}
        </div>
      );
    }
    return <div className="weekContainer">{weekDays}</div>;
  };
  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}
          ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
        >
          {format(currentDate, "d")}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };
  const getDates = () => {
    const startOfSelectedMonth = startOfMonth(activeDate);
    const endOfSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfSelectedMonth);
    const endDate = endOfWeek(endOfSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="weekContainer">{allWeeks}</div>;
  };
  return (
    <div>Calender
         <section>
      {getHeader()}
      {getWeekDaysNames()}
      {getDates()}
    </section>
    </div>
  )
}

export default Calender