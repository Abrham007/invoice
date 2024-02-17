import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import IconCalendar from "./IconCalendar";

export default function InputDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label className="w-full flex flex-col gap-[9px]">
        <span className="text-sm text-7 dark:text-5">Issue Date</span>
        <DesktopDatePicker
          slots={{ openPickerIcon: IconCalendar }}
          className="rounded border border-5 hover:border-none  hover:outline-none focus:border-none active:border-none"
        />
      </label>
    </LocalizationProvider>
  );
}
