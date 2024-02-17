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
          slotProps={{
            openPickerButton: {
              className: "w-[40px] h-[40px]",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #DFE3FA",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #9277FF",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid #9277FF",
              },
          }}
        />
      </label>
    </LocalizationProvider>
  );
}
