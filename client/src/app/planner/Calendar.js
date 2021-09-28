import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {events} from '../data'



const localizer = momentLocalizer(moment)

 const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, color: "#000" }}
      popup={true}
      selectable={true}
    />
  </div>
)

export default MyCalendar