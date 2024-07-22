import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleSelectSlot = (slotInfo) => {
    setNewEvent({
      title: '',
      start: slotInfo.start,
      end: slotInfo.end,
    });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  const handleExportToCalendar = (event) => {
    const { title, start, end } = event;
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${moment(start).format('YYYYMMDDTHHmmss')}/${moment(end).format('YYYYMMDDTHHmmss')}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="h-[600px] p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        selectable
        style={{ height: '100%' }}
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Add Event</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="start" className="text-right">
                Start
              </Label>
              <Input
                id="start"
                type="datetime-local"
                value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="end" className="text-right">
                End
              </Label>
              <Input
                id="end"
                type="datetime-local"
                value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleAddEvent}>Add Event</Button>
        </DialogContent>
      </Dialog>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
        {events.map((event, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{event.title} - {moment(event.start).format('MMMM Do YYYY, h:mm a')}</span>
            <Button onClick={() => handleExportToCalendar(event)}>Add to Calendar</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;