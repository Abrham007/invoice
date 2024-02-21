import downIcon from "../../../assets/icon-arrow-down.svg";
export default function InputDropdown({ label }) {
  return (
    <div className="w-full relative flex flex-col gap-[9px] cursor-pointer">
      <p className="text-sm text-7 dark:text-5">{label}</p>
      <div className="w-full pt-[18px] pl-5 pr-4 pb-[15px] flex items-center justify-between rounded bg-white dark:bg-3 border border-5 dark:border-[#1E2139] hover:border-[#9277FF] ">
        <span className="text-base text-8 dark:text-white">Net 30 Days</span>
        <img src={downIcon} alt=""></img>
      </div>
      <menu className="hidden absolute top-[72px] left-0 w-full list-none rounded-lg bg-white dark:bg-4 shadow-lg divide-y divide-5 dark:divide-3">
        <li>
          <button className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1">
            Net 1 Day
          </button>
        </li>
        <li>
          <button className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1">
            Net 7 Day
          </button>
        </li>
        <li>
          <button className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1">
            Net 14 Day
          </button>
        </li>
        <li>
          <button className="px-6 py-4 bg-transparent border-none outline-none text-base text-8 dark:text-white hover:text-1">
            Net 30 Day
          </button>
        </li>
      </menu>
    </div>
  );
}
