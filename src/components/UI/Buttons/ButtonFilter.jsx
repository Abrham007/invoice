import { useState } from "react";
import downIcon from "../../../assets/icon-arrow-down.svg";
import upIcon from "../../../assets/icon-arrow-up.svg";
export default function ButtonFilter({ children, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  let formStyle =
    "absolute top-9 md:top-8 left-[-65px] md:left-[-30px] w-[192px] flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-4 shadow-lg";

  if (isOpen) {
    formStyle += " visible";
  } else {
    formStyle += " invisible";
  }

  function toggleOpen() {
    setIsOpen((prevValue) => !prevValue);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="relative self-center">
      <button
        onClick={toggleOpen}
        className="flex gap-[14px] items-center text-8 dark:text-white text-baseS font-bold "
      >
        <span>{children}</span>
        <img src={isOpen ? upIcon : downIcon} alt=""></img>
      </button>
      <form className={formStyle} onChange={onChange}>
        <label className="group" onClick={handleClose}>
          <input
            type="radio"
            defaultChecked
            name="status"
            value="all"
            className="absolute w-0 h-0 opacity-0 peer"
          ></input>
          <span className="flex gap-3 items-center before:block before:w-4 before:h-4 before:rounded-sm before:bg-5 group-hover:before:border-1 group-hover:before:border-[1px] group-hover:before:border-solid group-hover:cursor-pointer peer-checked:before:bg-1 peer-checked:before:bg-checkIcon peer-checked:before:bg-no-repeat peer-checked:before:bg-center text-8 dark:text-white text-base font-bold">
            All
          </span>
        </label>

        <label className="group" onClick={handleClose}>
          <input
            type="radio"
            name="status"
            value="draft"
            className="absolute w-0 h-0 opacity-0 peer"
          ></input>
          <span className="flex gap-3 items-center before:block before:w-4 before:h-4 before:rounded-sm before:bg-5 group-hover:before:border-1 group-hover:before:border-[1px] group-hover:before:border-solid group-hover:cursor-pointer peer-checked:before:bg-1 peer-checked:before:bg-checkIcon peer-checked:before:bg-no-repeat peer-checked:before:bg-center text-8 dark:text-white text-base font-bold">
            Draft
          </span>
        </label>

        <label className="group" onClick={handleClose}>
          <input
            type="radio"
            name="status"
            value="pending"
            className="absolute w-0 h-0 opacity-0 peer"
          ></input>
          <span className="flex gap-3 items-center before:block before:w-4 before:h-4 before:rounded-sm before:bg-5 group-hover:before:border-1 group-hover:before:border-[1px] group-hover:before:border-solid group-hover:cursor-pointer peer-checked:before:bg-1 peer-checked:before:bg-checkIcon peer-checked:before:bg-no-repeat peer-checked:before:bg-center text-8 dark:text-white text-base font-bold">
            Pending
          </span>
        </label>

        <label className="group" onClick={handleClose}>
          <input
            type="radio"
            name="status"
            value="paid"
            className="absolute w-0 h-0 opacity-0 peer"
          ></input>
          <span className="flex gap-3 items-center before:block before:w-4 before:h-4 before:rounded-sm before:bg-5 group-hover:before:border-1 group-hover:before:border-[1px] group-hover:before:border-solid group-hover:cursor-pointer peer-checked:before:bg-1 peer-checked:before:bg-checkIcon peer-checked:before:bg-no-repeat peer-checked:before:bg-center text-8 dark:text-white text-base font-bold">
            Paid
          </span>
        </label>
      </form>
    </div>
  );
}
