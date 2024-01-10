import React,{useState} from 'react';
import "../styles/Calender.css";
import { format,
    startOfWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
   } from "date-fns";
import {  subMonths, addMonths } from "date-fns";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


function Calender() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeDate, setActiveDate] = useState(new Date());
    const getHeader = () => {
        return (
          <div className="header">
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
    console.log(weekStartDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div className="day weekNames">
          {format(addDays(weekStartDate, day), "E")}
        </div>
      );
    }
    console.log(weekDays)
    return <div className="weekContainer">{weekDays}</div>;
    
  };
  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      week.push(
        <div
          key={currentDate.toString()}
          className={`day ${isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"} 
          ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}`}
          onClick={() => {
            setSelectedDate(currentDate);
          }}
        >
          {isSameDay(currentDate, new Date()) && (
            <div className="currentDateMark"> 
              {format(currentDate, "d")}
            </div>
          )}
          {!isSameDay(currentDate, new Date()) && format(currentDate, "d")}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return week;
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
       <div className='main'>
        {/* <div>
            <button className='create'>+ Create <AiOutlineDown className="dropdown-icon" /></button>
        </div> */}
      <section>
      {getHeader()}
        {getWeekDaysNames()}
        {getDates()}
        </section>
        </div>

   
  )
}

export default Calender;