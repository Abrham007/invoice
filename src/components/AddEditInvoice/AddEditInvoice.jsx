import Button from "../UI/Buttons/Button";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";
import leftIcon from "../../assets/icon-arrow-left.svg";
import Wrapper from "./Wrapper";
import { useState } from "react";

export default function AddEditInvoice({ isOpen, handleClose }) {
  function closeInvoice() {
    handleClose();
  }
  return (
    <Wrapper isOpen={isOpen}>
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
        <Button type="3" onClick={closeInvoice}>
          Cancel
        </Button>
        <Button type="2">Save Changes</Button>
      </div>
    </Wrapper>
  );
}
