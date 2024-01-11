import React,{useCallback, useState} from 'react';
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
    const [events,setEvents] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [inputDate,setInputDate]=useState('');
    const [inputendDate,setInputendDate]=useState('');
       const clickonDate = (selectedDate) => {
        console.log(selectedDate);
        setSelectedDate(selectedDate);
        setIsModalOpen(true);
      
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
  const renderEventsForDate = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const eventsForDate = events.filter((event) => event.date === formattedDate);
    return (
      <div className='eventdiv'>
        {eventsForDate.map((event, index) => (
          <div key={index} className='eventdivindex'>
            {event.title}
          </div>
        ))}
      </div>
    );
  };
  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      week.push(
        <div 
          key={currentDate}
          className={`day ${isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"} 
          ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}`}
          onClick={() => clickonDate(selectedDate)}
        >
      
           {isSameDay(currentDate, new Date()) && (
            <div className="currentDateMark"> 
              {format(currentDate, "d")}
            </div>
          )}
        {!isSameDay(currentDate, new Date()) && (
         <div className="dayNumber"> 
         {format(currentDate, "d")}
       </div>
      )}
          {renderEventsForDate(format(currentDate, "yyyy-MM-dd"))}
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
  

  const handleSave = () => {
    const updatedEvents = [...events];
    const startDate = new Date(inputDate);
    const endDate = new Date(inputendDate);
    if (startDate <= endDate) {
      
      const dateRange = [];
      let currentDate = startDate;
      while (currentDate <= endDate) {
        dateRange.push(format(currentDate, "yyyy-MM-dd"));
        currentDate = addDays(currentDate, 1);
      }
      dateRange.forEach((date) => {
        const newEvent = {
          date,
          title: inputTitle,
          time: inputTime,
        };
        updatedEvents.push(newEvent);
      });
      setEvents(updatedEvents);
      setIsModalOpen(false);
      setInputTitle('');
      setInputTime('');
      setInputDate('');
      setInputendDate('');
    }
  };

  return (
       <div className='main'>
      <section>
      {getHeader()}
        {getWeekDaysNames()}
        {getDates()}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <div>  <input
    className="modalinput1"
    placeholder="Add Event Title"
    value={inputTitle}
    onChange={(e) => setInputTitle(e.target.value)}
  /></div>
  <div>
   <span className='startdate'>Start Date</span>
   <input
   type='date'
    className="modalinput"
    placeholder="Add Start Event Date"
    value={inputDate}
    onChange={(e) => setInputDate(e.target.value)}
  />
  </div>
  <div>
  <span className='enddate'>End Date</span>
   <input 
   type='date'
    className="modalinput"
    placeholder="Add End Event Date"
    value={inputendDate}
    onChange={(e) => setInputendDate(e.target.value)}
  />
  </div>
  <div>
  <input
    className="modalinput1"
    placeholder="Add Event Time"
    value={inputTime}
    onChange={(e) => setInputTime(e.target.value)}
  />
  </div>
            <div className='modalbottom'></div>
             <button className="modalbutton"onClick={handleSave}>Save</button>
        </Modal>
       {getEventsForDate(selectedDate)}
        </section>  </div>

   
  )
}

export default Calender;