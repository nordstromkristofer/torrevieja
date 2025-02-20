import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingCalendar.css"; // Uppdaterad styling

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const BookingCalendar: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [bookedDates, setBookedDates] = useState<Date[]>([
    new Date(2025, 1, 10), // Exempel på redan bokade datum
    new Date(2025, 1, 15),
  ]);

  // Hantera klick på datum
  const handleDateClick = (date: Date) => {
    const isBooked = bookedDates.some((d) => d.toDateString() === date.toDateString());
    if (isBooked) return; // Stoppa om datumet redan är bokat

    setSelectedDates((prev) => {
      const exists = prev.some((d) => d.toDateString() === date.toDateString());
      return exists ? prev.filter((d) => d.toDateString() !== date.toDateString()) : [...prev, date];
    });
  };

  // Bekräfta bokningar
  const confirmBooking = () => {
    setBookedDates((prev) => [...prev, ...selectedDates]);
    setSelectedDates([]); // Töm valda datum efter bokning
  };

  return (
    <div className="calendar-container">
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={({ date }) => {
          if (bookedDates.some((d) => d.toDateString() === date.toDateString())) {
            return "booked"; // Röd bakgrund
          }
          if (selectedDates.some((d) => d.toDateString() === date.toDateString())) {
            return "selected"; // Blå bakgrund
          }
          return "available"; // Default-styling
        }}
      />
      <button onClick={confirmBooking} disabled={selectedDates.length === 0} className="confirm-btn">
        Bekräfta bokning
      </button>
    </div>
  );
};

export default BookingCalendar;
