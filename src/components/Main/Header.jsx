import Button from "../UI/Buttons/Button";
import plusIcon from "../../assets/icon-plus.svg";
import ButtonFilter from "../UI/Buttons/ButtonFilter";
import { useMediaQuery } from "react-responsive";

export default function Header({ onChange, openAddInvoice }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header className="w-full flex justify-between">
      <div className="flex flex-col gap-[3px] md:gap-[6px]">
        <h1 className="text-lg md:text-xl text-8 dark:text-white font-bold">
          Invoices
        </h1>
        <p className="text-sm text-6 dark:text-5">
          {isBigScreen ? "There are 7 total invoices" : "7 invoices"}
        </p>
      </div>
      <div className="flex gap-5 md:gap-10">
        <ButtonFilter onChange={onChange}>
          {isBigScreen ? "Filter by status" : "Filter"}
        </ButtonFilter>
        <Button type="1" onClick={openAddInvoice}>
          <span className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
            <img src={plusIcon} alt="" className="ml-0.4 mt-0.4"></img>
          </span>
          <span>{isBigScreen ? "New Invoice" : "New"}</span>
        </Button>
      </div>
    </header>
  );
}
