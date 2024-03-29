import { useState } from "react";
import downIcon from "../../../assets/icon-arrow-down.svg";
export default function InputDropdown({
  label,
  defaultValue,
  value,
  onChange,
  onBlur,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevValue) => !prevValue);
  }

  let menuStyles =
    "absolute top-[80px] left-0 w-full list-none rounded-lg bg-white dark:bg-4 shadow-lg divide-y divide-5 dark:divide-3";

  if (isOpen) {
    menuStyles += " flex flex-col";
  } else {
    menuStyles += " hidden";
  }

  function handleSelectingTerm(newTerm) {
    onChange(newTerm);
    setIsOpen(false);
  }

  return (
    <div className="group w-full relative flex flex-col gap-[9px] cursor-pointer">
      <p className="text-sm text-7 dark:text-5">{label}</p>

      <button
        onClick={toggleOpen}
        type="button"
        className=" w-full pt-[20px] pl-5 pr-4 pb-[18px] flex items-center justify-between rounded bg-white dark:bg-3 border border-5 dark:border-[#1E2139] hover:border-[#9277FF] "
      >
        <span className="text-base text-8 dark:text-white">
          Net {value} Days
        </span>
        <img src={downIcon} alt=""></img>
      </button>

      <menu className={menuStyles}>
        <li>
          <button
            type="button"
            onClick={() => handleSelectingTerm(1)}
            className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1"
          >
            Net 1 Day
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleSelectingTerm(7)}
            className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1"
          >
            Net 7 Day
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleSelectingTerm(14)}
            className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1"
          >
            Net 14 Day
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleSelectingTerm(30)}
            className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1"
          >
            Net 30 Day
          </button>
        </li>
      </menu>
    </div>
  );
}
