import { useState, useRef, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import {
  addDays,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  isWithinInterval,
  parseISO,
  differenceInDays
} from "date-fns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Trash2, Edit, RefreshCcw } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialEvents = [
  { date: "2020-07-01", title: "Deadline: Haystack", color: "bg-blue-500" },
  { date: "2020-07-08", title: "Townhall meeting", color: "bg-orange-400" },
  { date: "2020-07-10", title: "Preparations Design", color: "bg-orange-400" },
  { date: "2020-07-12", title: "DEV QA", color: "bg-blue-600" },
  { start: "2020-07-19", end: "2020-07-28", title: "Design Sprint Haystack", color: "bg-purple-500" },
];

function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6));
  const [selectedDate, setSelectedDate] = useState(null as Date | null);
  const [events, setEvents] = useState(initialEvents as any);
  const [open, setOpen] = useState(false);
  const [editingEventIndex, setEditingEventIndex] = useState(null);
  const [formData, setFormData] = useState({ title: '', date: '', end: '', color: 'bg-blue-500' });

  const dragStartRef = useRef(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const handleCreateEvent = () => {
    if (!formData.title || !formData.date) return;
    const newEvent = formData.end ? { ...formData } : { ...formData, date: formData.date };
    if (editingEventIndex !== null) {
      const updated = [...events];
      updated[editingEventIndex] = newEvent;
      setEvents(updated);
    } else {
      setEvents([...events, newEvent]);
    }
    setFormData({ title: '', date: '', end: '', color: 'bg-blue-500' });
    setEditingEventIndex(null);
    setOpen(false);
  };

  const handleEditEvent = (event : any , index: any) => {
    setFormData({
      title: event.title,
      date: event.date || event.start,
      end: event.end || '',
      color: event.color || 'bg-blue-500'
    });
    setEditingEventIndex(index);
    setOpen(true);
  };

  const handleDeleteEvent = (index: any) => {
    const updated = [...events];
    updated.splice(index, 1);
    setEvents(updated);
  };

  const handleDragStart = (date: any) => {
    const newLocal = dragStartRef.current = date;
  };

  const handleDragEnd = (date: any) => {
    const start = dragStartRef.current;
    if (!start) return;
    const rangeStart = start < date ? start : date;
    const rangeEnd = start > date ? start : date;
    setFormData({ ...formData, date: format(rangeStart, 'yyyy-MM-dd'), end: format(rangeEnd, 'yyyy-MM-dd') });
    setOpen(true);
    dragStartRef.current = null;
  };

  const handleGoogleSync = () => {
    alert("Syncing with Google Calendar... (Mock implementation)");
  };

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      const formattedDate = format(cloneDay, "d");

      const dayEvents = events.filter((e: { date: string; start: string; end: string; }) => {
        if (e.date) return isSameDay(parseISO(e.date), cloneDay);
        if (e.start && e.end) return isWithinInterval(cloneDay, { start: parseISO(e.start), end: parseISO(e.end) });
        return false;
      });

      days.push(
        <div
          key={day.toISOString()}
          draggable
          onDragStart={() => handleDragStart(cloneDay)}
          onDragOver={e => e.preventDefault()}
          onDrop={() => handleDragEnd(cloneDay)}
          className={`border h-28 p-1 text-sm align-top relative cursor-pointer transition hover:bg-gray-100 ${!isSameMonth(cloneDay, currentMonth) ? "bg-gray-50 text-gray-400" : "bg-white"}`}
          onClick={() => setSelectedDate(cloneDay)}
        >
          <div className="text-gray-700 text-xs font-medium">{formattedDate}</div>
          <div className="space-y-0.5">
            {dayEvents.map((event: { start: string; end: string; color: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => {
              const isRange = event.start && event.end;
              const rangeDays = isRange ? differenceInDays(parseISO(event.end), parseISO(event.start)) + 1 : 1;
              const widthClass = isRange ? `w-full` : 'w-full';
              return (
                <div
                  key={index}
                  className={`text-white text-xs px-1 py-0.5 rounded ${event.color} ${widthClass} truncate`}
                  style={{ fontSize: '0.7rem' }}
                >
                  {event.title}
                </div>
              );
            })}
          </div>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<div className="grid grid-cols-7 gap-px" key={day.toISOString()}>{days}</div>);
    days = [];
  }

  return (
    <Card className="p-6 max-w-6xl mx-auto mt-10 shadow-xl rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={prevMonth} size="icon"><ChevronLeft /></Button>
        <h2 className="text-xl font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="default"><Plus className="w-4 h-4 mr-1" /> Add Event</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{editingEventIndex !== null ? "Edit Event" : "Create Event"}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Title</Label>
                  <Input value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                  </div>
                  <div>
                    <Label>End Date (optional)</Label>
                    <Input type="date" value={formData.end} onChange={e => setFormData({ ...formData, end: e.target.value })} />
                  </div>
                </div>
                <div>
                  <Label>Color</Label>
                  <select className="w-full border rounded p-2" value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })}>
                    <option value="bg-blue-500">Blue</option>
                    <option value="bg-orange-400">Orange</option>
                    <option value="bg-purple-500">Purple</option>
                    <option value="bg-green-500">Green</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleCreateEvent}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={handleGoogleSync}><RefreshCcw className="w-4 h-4 mr-1" /> Google Sync</Button>
          <Button variant="ghost" onClick={nextMonth} size="icon"><ChevronRight /></Button>
        </div>
      </div>

      <div className="grid grid-cols-7 bg-gray-100 text-center font-medium text-sm rounded-t-md">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div className="p-2" key={day}>{day}</div>
        ))}
      </div>
      <div className="border border-t-0 rounded-b-md overflow-hidden">
        {rows}
      </div>

      {selectedDate && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
          <h3 className="font-semibold text-sm mb-2">Events on {format(selectedDate, "PPP")}</h3>
          {events.map((event: { date: string; start: string; end: string; color: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, i: Key | null | undefined) => {
            const d = selectedDate;
            const isInDay = event.date ? isSameDay(parseISO(event.date), d) :
              event.start && event.end ? isWithinInterval(d, { start: parseISO(event.start), end: parseISO(event.end) }) : false;
            if (!isInDay) return null;
            return (
              <div key={i} className="flex items-center justify-between mb-2">
                <div className={`text-white px-2 py-1 rounded ${event.color}`}>{event.title}</div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" onClick={() => handleEditEvent(event, i)}><Edit className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => handleDeleteEvent(i)}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </div>
            );
          })}
          {!events.some((e: { date: string; start: string; end: string; }) => {
            const d = selectedDate;
            if (e.date) return isSameDay(parseISO(e.date), d);
            if (e.start && e.end) return isWithinInterval(d, { start: parseISO(e.start), end: parseISO(e.end) });
            return false;
          }) && <p className="text-gray-500 text-sm">No events.</p>}
        </div>
      )}
    </Card>
  );
}

export default CalendarView;
