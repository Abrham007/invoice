import Button from "./Button";
import plusIcon from "../assets/icon-plus.svg";
import ButtonFilter from "./ButtonFilter";

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-3xl text-8 dark:text-white tracking-tighter font-bold">Invoices</h1>
        <p className="text-sm text-6 dark:text-5">There are 7 total invoices</p>
      </div>
      <div className="flex gap-[40px]">
        <ButtonFilter></ButtonFilter>
        <Button type="1">
          <span className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
            <img src={plusIcon} alt="" className="ml-0.4 mt-0.4"></img>
          </span>
          <span>New Invoice</span>
        </Button>
      </div>
    </header>
  );
}
