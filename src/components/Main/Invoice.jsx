import rightIcon from "../../assets/icon-arrow-right.svg";
import Status from "../Status";
import { Link } from "react-router-dom";
export default function Invoice(props) {
  let date = new Date(props.paymentDue);
  let dueDate = new Intl.DateTimeFormat(undefined, {
    month: "short",
    year: "numeric",
    day: "2-digit",
  }).format(date);
  return (
    <Link
      to={`invoicedetail/${props.id}`}
      className="h-[134px] md:h-[72px] w-full p-6  grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr] gap-[9px] justify-items-start  md:flex md:gap-[30px] md:justify-start md:items-center md:text-left bg-white dark:bg-3 rounded-lg shadow hover:border-[1px] hover:border-solid hover:border-1"
    >
      <span className=" text-8 dark:text-white text-base font-bold md:flex-1">
        <span className="text-7 font-bold text-base">#</span>
        {String(props.id).slice(0, 7).toUpperCase()}
      </span>
      <span className="col-start-1 col-end-2 row-start-2 row-end-3 self-end text-7 dark:text-5 text-sm  md:self-center">
        Due {dueDate}
      </span>
      <span className="col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end self-center text-7 dark:text-white text-sm md:flex-1 ">
        {props.clientName}
      </span>
      <span className="col-start-1 col-end-2 row-start-3 row-end-4 self-end md:self-center text-8 dark:text-white text-base/6 font-bold md:flex-1 md:text-right ">
        £ {props.total}
      </span>
      <Status>{props.status}</Status>
      <span className="hidden md:inline-block">
        <img src={rightIcon} alt=""></img>
      </span>
    </Link>
  );
}
