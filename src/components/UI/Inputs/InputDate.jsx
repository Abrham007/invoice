import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import IconCalendar from "../Icons/IconCalendar";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/ThemeContext";
import { Controller } from "react-hook-form";

export default function InputDate({
  lable,
  disabled = false,
  defaultValue,
  name,
  control,
}) {
  const { theme } = useContext(ThemeContext);

  let isDarkMode = theme === "dark" ? true : false;

  let color = "#0C0E16";
  let backgroundColor = "#FFF";
  let borderColor = "#DFE3FA";

  if (isDarkMode) {
    color = "#FFF";
    backgroundColor = "#1E2139";
    borderColor = "#252945";
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label className="w-full flex flex-col gap-[9px]">
        <span className="text-sm text-7 dark:text-5">{lable}</span>

        <Controller
          name={name}
          control={control}
          defaultValue={dayjs(`${defaultValue}`)}
          render={({ field }) => (
            <DesktopDatePicker
              {...field}
              disabled={disabled}
              className="cursor-pointer"
              format="DD MMM YYYY"
              PopperProps={{
                style: { zIndex: 1000000 },
              }}
              slots={{ openPickerIcon: IconCalendar }}
              slotProps={{
                popper: {
                  disablePortal: true,
                },
                openPickerButton: {
                  className: "w-[40px] h-[40px]",
                },
                layout: {
                  sx: {
                    backgroundColor: `${backgroundColor}`,
                    color: `${color}`,
                    "& .MuiPickersDay-root": {
                      color: `${color}`,
                    },
                    "& .MuiPickersCalendarHeader-switchViewButton": {
                      color: `${color}`,
                    },
                    "& .MuiTypography-root": {
                      color: `${color}`,
                    },
                    "& .MuiSvgIcon-root": {
                      color: `${color}`,
                    },
                  },
                },
              }}
              sx={{
                "& .MuiDateCalendar-root": {
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: `${backgroundColor}`,
                  color: `${color}`,
                  fontFamily: "League Spartan, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: "0.9375rem",
                  letterSpacing: "-0.01563",
                  fontWeight: "bold",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: `1px solid ${borderColor}`,
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #9277FF",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #9277FF",
                  },
              }}
            />
          )}
        ></Controller>
      </label>
    </LocalizationProvider>
  );
}
