import downIcon from "../../../assets/icon-arrow-down.svg";
export default function ButtonFilter({ children }) {
  return (
    <div className="relative self-center">
      <button className="flex gap-[14px] items-center text-8 dark:text-white text-baseS font-bold ">
        <span>{children}</span>
        <img src={downIcon} alt=""></img>
      </button>
      <menu className="absolute invisible top-9 md:top-8 left-[-65px] md:left-[-30px] w-[192px] flex flex-col gap-2 p-6 rounded-lg bg-white dark:bg-4 shadow-lg">
        <li>
          <label className="group">
            <input
              type="checkbox"
              className="absolute w-0 h-0 opacity-0 peer"
            ></input>
            <span className="flex gap-3 items-center before:block before:w-4 before:h-4 before:rounded-sm before:bg-5 group-hover:before:border-1 group-hover:before:border-[1px] group-hover:before:border-solid group-hover:cursor-pointer peer-checked:before:bg-1 peer-checked:before:bg-checkIcon peer-checked:before:bg-no-repeat peer-checked:before:bg-center text-8 dark:text-white text-base font-bold">
              Draft
            </span>
          </label>
        </li>
      </menu>
    </div>
  );
}
