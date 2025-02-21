import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import './dropdown.css'

export default function Dropdown() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);

  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64">
      {/* Knapp som öppnar/stänger kalendern */}
      <button

        style={{
          width: '250px',
          borderRadius: '20px',
          border: '1px solid black',
          height: '50px',
        }}
        className="w-full px-4 py-2 border rounded-lg bg-white shadow-sm text-left"
        onClick={() => setOpen(!open)}
      >
        {checkIn && checkOut
          ? `${format(checkIn, "yyyy-MM-dd")} → ${format(checkOut, "yyyy-MM-dd")}`
          : "Välj datum"}
      </button>

      {/* Dropdown-kalendern */}
      {open && (
        <div className="absolute top-12 left-0 bg-white shadow-lg p-4 rounded-lg z-50">
          <p className="text-sm font-semibold">Incheckning:</p>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date ?? undefined)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            className="border p-2 rounded w-full"
          />
          <p className="text-sm font-semibold mt-2">Utcheckning:</p>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date ?? undefined)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn}
            className="border p-2 rounded w-full"
          />
          {/* Stäng-knapp */}
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Bekräfta
          </button>
        </div>
      )}
    </div>
  );
}
