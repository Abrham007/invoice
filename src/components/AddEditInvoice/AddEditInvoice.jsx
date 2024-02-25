import Button from "../UI/Buttons/Button";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";
import leftIcon from "../../assets/icon-arrow-left.svg";
import { useState } from "react";
import Modal from "../Modal";
import SideBar from "../SideBar";

export default function AddEditInvoice({ isOpen, handleClose, id }) {
  let title = (
    <h2 className="text-lg/8 text-8 dark:text-white font-bold">New Invoice</h2>
  );

  if (id) {
    title = (
      <h2 className="text-lg/8 text-8 dark:text-white font-bold">
        Edit <span className="text-6">#</span>
        {id}
      </h2>
    );
  }
  function closeInvoice() {
    handleClose();
  }
  return (
    <Modal
      className="min-h-screen  max-w-[100%] md:w-[616px] pb-[80px] lg:pb-[0px] md:rounded-br-[20px] md:rounded-tr-[20px]  backdrop:opacity-50 backdrop:bg-[#000] backdrop:top-[80px] top-[80px] lg:backdrop:top-[0px] lg:top-[0px] lg:backdrop:left-[104px] lg:left-[104px] bg-white dark:bg-12"
      isOpen={isOpen}
      setIsOpen={handleClose}
    >
      <SideBar></SideBar>
      <div className="p-6 pb-8 md:p-14 flex flex-col gap-[22px] bg-white dark:bg-12">
        <button
          onClick={closeInvoice}
          className="flex gap-6 items-start  self-start md:hidden"
        >
          <img src={leftIcon} alt=""></img>
          <span className="text-base text-8 dark:text-white hover:text-7">
            Go Back
          </span>
        </button>
        {title}
        <div className=" flex flex-col gap-[41px] ">
          <BillFrom id={id}></BillFrom>
          <BillTo id={id}></BillTo>
          <InvoiceInfo id={id}></InvoiceInfo>
          <ItemList id={id}></ItemList>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-screen md:w-full  p-6 flex gap-2 justify-end items-center bg-white dark:bg-3 shadow-xl md:rounded-r-[20px]">
        <Button type="3" onClick={closeInvoice}>
          Cancel
        </Button>
        <Button type="2">Save Changes</Button>
      </div>
    </Modal>
  );
}
