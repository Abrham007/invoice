import Button from "../UI/Buttons/Button";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";
import leftIcon from "../../assets/icon-arrow-left.svg";
import Modal from "../Modal";
import { useMediaQuery } from "react-responsive";

export default function AddEditInvoice() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  let Wrapper;
  let wrapperStyle = "";
  if (isBigScreen) {
    Wrapper = Modal;
    wrapperStyle +=
      " min-h-screen w-[616px] md:pb-[80px] lg:pb-[0px] backdrop:opacity-50 backdrop:bg-[#000] md:backdrop:top-[80px] md:top-[80px] lg:backdrop:top-[0px] lg:top-[0px] lg:backdrop:left-[104px] lg:left-[104px] bg-white dark:bg-12";
  } else {
    Wrapper = "section";
    wrapperStyle =
      " absolute top-20 left-0 w-screen rounded-br-[20px] rounded-tr-[20px] bg-white dark:bg-12";
  }
  return (
    <Wrapper className={wrapperStyle}>
      <div className="p-6 pb-8 md:p-14 flex flex-col gap-[22px] bg-white dark:bg-12">
        <a href="#" className="flex gap-6 items-start  self-start md:hidden">
          <img src={leftIcon} alt=""></img>
          <span className="text-base text-8 dark:text-white hover:text-7">
            Go Back
          </span>
        </a>
        <h2 className="text-lg/8 text-8 dark:text-white font-bold">
          Edit <span className="text-6">#</span>XM9141
        </h2>
        <div className=" flex flex-col gap-[41px] ">
          <BillFrom></BillFrom>
          <BillTo></BillTo>
          <InvoiceInfo></InvoiceInfo>
          <ItemList></ItemList>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-screen md:w-full  p-6 flex gap-2 justify-end items-center bg-white dark:bg-3 shadow-xl md:rounded-r-[20px]">
        <Button type="3">Cancel</Button>
        <Button type="2">Save Changes</Button>
      </div>
    </Wrapper>
  );
}
