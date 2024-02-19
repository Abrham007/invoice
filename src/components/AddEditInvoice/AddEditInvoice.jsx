import Button from "../Button";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";
import leftIcon from "../../assets/icon-arrow-left.svg";
import Modal from "../Modal";

export default function AddEditInvoice() {
  return (
    <section className="pb-[155px] absolute top-[105px] left-0 w-screen md:w-[616px]">
      <div className="p-6 md:p-14 flex flex-col gap-[22px] bg-white dark:bg-12">
        <a href="#" className="flex gap-6 items-start  self-start">
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
          <div className="fixed bottom-0 left-0 w-screen md:full  p-6 flex gap-2 justify-end items-center bg-white dark:bg-3 shadow-xl">
            <Button type="3">Cancel</Button>
            <Button type="2">Save Changes</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
