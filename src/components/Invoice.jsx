import rightIcon from "../assets/icon-arrow-right.svg";
import Status from "./Status";
export default function Invoice() {
  return (
    <button className="h-[134px] md:h-[72px] w-full p-6 md:p-0 grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr] gap-[9px] justify-items-start  md:flex md:gap-0 md:justify-center md:items-center bg-white dark:bg-3 rounded-lg shadow-lg hover:border-[1px] hover:border-solid hover:border-1">
      <p className="md:mr-[28px] lg:mr-[44px] text-8 dark:text-white text-base font-bold">
        <span className="text-7 font-bold text-baseS">#</span>RT3080
      </p>
      <p className="md:mr-[51px] lg:mr-[59px] col-start-1 col-end-2 row-start-2 row-end-3 self-end md:self-center text-7 dark:text-5 text-smS font-medium leading-tight">
        Due 19 Aug 2021
      </p>
      <p className="md:mr-[82px] lg:mr-[108px] col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end self-center text-7 dark:text-white text-smS font-medium leading-tight">
        Jensen Huang
      </p>
      <p className="md:mr-[40px] col-start-1 col-end-2 row-start-3 row-end-4 self-end md:self-center text-8 dark:text-white text-baseL font-bold">
        £ 1,800.90
      </p>
      <Status>Paid</Status>
      <p className="hidden md:inline-block">
        <img src={rightIcon} alt=""></img>
      </p>
    </button>
  );
}
