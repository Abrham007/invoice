import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";
import leftIcon from "../../assets/icon-arrow-left.svg";
import Modal from "../Modal";
import SideBar from "../SideBar";
import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import { useForm } from "react-hook-form";

export default function AddEditInvoice({ isOpen, handleClose, id }) {
  const [newInvoice, setNewInvoice] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  let title = (
    <h2 className="text-lg/8 text-8 dark:text-white font-bold">New Invoice</h2>
  );

  if (id) {
    title = (
      <h2 className="text-lg/8 text-8 dark:text-white font-bold">
        Edit <span className="text-6">#</span>
        {String(id).slice(0, 7).toUpperCase()}
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
        <form
          id="invoiceForm"
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-[41px] "
        >
          <BillFrom id={id} register={register} errors={errors}></BillFrom>
          <BillTo id={id} register={register} errors={errors}></BillTo>
          <InvoiceInfo
            id={id}
            register={register}
            errors={errors}
          ></InvoiceInfo>
          <ItemList id={id} register={register} errors={errors}></ItemList>
        </form>
      </div>
      <ButtonGroup id={id} handleClose={handleClose}></ButtonGroup>
    </Modal>
  );
}
