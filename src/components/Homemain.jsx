import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import "../styles/Homemain.css"

function Homemain() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateClick = (date) => {
    setSelectedDate(date);
    const selectedWeekday = format(date, 'EEEE'); 
    console.log(`Selected weekday: ${selectedWeekday}`);
  };
  

  const startOfMonthDate = startOfMonth(selectedDate);
  const endOfMonthDate = endOfMonth(selectedDate);
  const daysInMonth = eachDayOfInterval({ start: startOfMonthDate, end: endOfMonthDate });
 
  const calendarDays = daysInMonth.map((day) => {
    const dayOfWeek = getDay(day); 
    const isCurrentMonth = format(day, 'M') === format(selectedDate, 'M');
    const classNames = `day ${isCurrentMonth ? 'current-month' : 'other-month'} ${dayOfWeek === 0 || dayOfWeek === 6 ? 'weekend' : ''}`;
    
    return (
      <li key={day} className="day" onClick={() => handleDateClick(day)}>
        {format(day, 'd')}
      </li>
    );
  });
  return (
    <div className="wholediv">
     <div className="calendar">
     <ul class="weekdays">
     <li>Sun</li>
  <li>Mon</li>
  <li>Tue</li>
  <li>Wed</li>
  <li>Thu</li>
  <li>Fri</li>
  <li>Sat</li>
</ul>
      <div className="days">{calendarDays}</div>
    </div>
    </div>
  )
}

export default Homemain;