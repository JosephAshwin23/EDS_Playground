import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useContext } from 'react';
import { MainContext } from './ContextProvider';

export default function FullCalendarHelper() {
    const {setVisible, setView} = useContext(MainContext);
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
      initialView="timeGridWeek"
      selectable={true}
      selectAllow={(info)=>{
        // change the state;
        console.log(info);
        setVisible(true);
        setView('week');
        return true
      }}
    />
  )
}