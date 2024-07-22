import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', start: '', end: '' });
      setIsDialogOpen(false);
      toast.success('Event added successfully!');
    } else {
      toast.error('Please fill in all fields.');
    }
  };

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({
      title: '',
      start,
      end,
    });
    setIsDialogOpen(true);
  };

  const handleAddToPersonalCalendar = (event) => {
    const { title, start, end } = event;
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start.toISOString().replace(/-|:|\.\d+/g, '')}/${end.toISOString().replace(/-|:|\.\d+/g, '')}`;
    window.open(googleCalendarUrl, '_blank');
    toast.success('Event added to Google Calendar!');
  };

  return (
    <div className="h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4">Add New Event</Button>
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
                value={newEvent.start ? format(new Date(newEvent.start), "yyyy-MM-dd'T'HH:mm") : ''}
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
                value={newEvent.end ? format(new Date(newEvent.end), "yyyy-MM-dd'T'HH:mm") : ''}
                onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleAddEvent}>Add Event</Button>
        </DialogContent>
      </Dialog>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => handleAddToPersonalCalendar(event)}
      />
    </div>
  );
};

export default EventCalendar;