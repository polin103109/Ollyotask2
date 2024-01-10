import React,{useState} from 'react';
import "../styles/Calender.css";
import Modal from './Modal';
import { format,startOfWeek,
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [events, setEvents] = useState({});

    const clickonDate = (currentDate) => {
        setSelectedDate(currentDate);
        setIsModalOpen(true);
        alert(hello)

      }
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
          onClick={clickonDate}
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
  
  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };
  const handleSave = () => {
    const updatedEvents = { ...events };
    if (!updatedEvents[selectedDate]) {
      updatedEvents[selectedDate] = [];
    }
    updatedEvents[selectedDate].push(inputValue);
    setIsModalOpen(false);
    setEvents(updatedEvents);
    setInputValue(''); 
  };
  const getEventsForDate = (date) => {
    if (events[date]) {
      return events[date].map((event, index) => (
        <div key={index} className="event">
          {event}
        </div>
      ));
    }
    return null;
  };
  return (
       <div className='main'>
      <section>
      {getHeader()}
        {getWeekDaysNames()}
        {getDates()}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <input className="modalinput"placeholder='Add Title and Time'  value={inputValue}
            onChange={handleInputChange}></input>
            <div className='modalbottom'></div>
             <button className="modalbutton"onClick={handleSave}>Save</button>
        </Modal>
        {getEventsForDate(selectedDate)}
        </section>
        </div>

   
  )
}

export default Calender;