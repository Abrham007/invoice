import rightIcon from "../assets/icon-arrow-right.svg";
export default function Invoice() {
  return (
    <li className="w-full">
      <button className="h-[72px] w-full pl-8 flex justify-start items-center bg-white dark:bg-3 rounded-lg shadow-lg hover:border-[1px] hover:border-solid hover:border-1">
        <p className="mr-[44px] text-8 dark:text-white text-base font-bold">
          <span className="text-7 font-bold text-base">#</span>RT3080
        </p>
        <p className="mr-[59px]  text-7 dark:text-5 text-xs font-medium leading-tight">Due 19 Aug 2021</p>
        <p className="mr-[108px] text-7 dark:text-white text-xs font-medium leading-tight">Jensen Huang</p>
        <p className="mr-[40px] text-8 dark:text-white text-base font-bold">£ 1,800.90</p>
        <p className="mr-[20px] h-[40px] w-[104px] bg-[#33D69F10]  rounded-md flex justify-center items-center gap-2">
          <span role="presentation" className="w-2 h-2 rounded-full bg-[#33D69F]"></span>
          <span className="text-[#33D69F] text-base font-bold">Paid</span>
        </p>
        <p>
          <img src={rightIcon} alt=""></img>
        </p>
      </button>
    </li>
  );
}
