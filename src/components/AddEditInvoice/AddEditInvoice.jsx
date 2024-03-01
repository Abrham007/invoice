import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";
import leftIcon from "../../assets/icon-arrow-left.svg";
import Modal from "../Modal";
import SideBar from "../SideBar";
import ButtonGroup from "./ButtonGroup";
import { useForm, useFieldArray } from "react-hook-form";
import ErrorList from "./ErrorList";
import { useState, useContext } from "react";
import { DataContext } from "../../store/DataContext";

function prepareData(data, status) {
  function createDateString(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  let newInvoice = { ...data };

  newInvoice.status = status;

  newInvoice.items.forEach((item) => {
    item.quantity = parseInt(item.quantity);
    item.price = parseFloat(item.price);
    item.total = parseFloat(item.total);
  });

  let totalPrice = newInvoice.items
    .map((item) => item.total)
    .reduce((x, y) => parseFloat(x) + parseFloat(y));
  newInvoice.total = parseFloat(totalPrice);

  let paymentTerms = newInvoice.paymentTerms;
  let createdAt = new Date(newInvoice.createdAt);
  let paymentDue = new Date(newInvoice.createdAt);
  paymentDue.setDate(paymentDue.getDate() + paymentTerms);

  newInvoice.createdAt = createDateString(createdAt);
  newInvoice.paymentDue = createDateString(paymentDue);

  return newInvoice;
}

export default function AddEditInvoice({ isOpen, handleClose, id }) {
  const { data, createInvoice, isCreating, updateInvoice } =
    useContext(DataContext);

  let defaultValue = {
    createdAt: new Date().toDateString(),
    description: "",
    paymentTerms: 30,
    clientName: "",
    clientEmail: "",
    status: "pending",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [],
  };

  let title = (
    <h2 className="text-lg/8 text-8 dark:text-white font-bold">New Invoice</h2>
  );

  if (id) {
    let currentInvoice = data.find((invoice) => invoice.id === id);
    let tempInvoice = { ...currentInvoice };
    delete tempInvoice.total;
    delete tempInvoice.paymentDue;
    delete tempInvoice.id;
    defaultValue = tempInvoice;
    title = (
      <h2 className="text-lg/8 text-8 dark:text-white font-bold">
        Edit <span className="text-6">#</span>
        {String(id).slice(0, 7).toUpperCase()}
      </h2>
    );
  }

  const [status, setStatus] = useState(defaultValue.status);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
    rules: { required: true },
  });

  const watchItems = watch("items");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchItems[index],
    };
  });

  async function onSubmit(data) {
    if (id) {
      let updatedInvoice = prepareData(data, status);
      updateInvoice(id, updatedInvoice);
      closeModal();
    } else {
      await createInvoice(prepareData(data, status));
      closeModal();
    }
  }

  function closeModal() {
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
          onClick={closeModal}
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
          <BillFrom register={register} errors={errors}></BillFrom>
          <BillTo register={register} errors={errors}></BillTo>
          <InvoiceInfo
            id={id}
            register={register}
            errors={errors}
            control={control}
          ></InvoiceInfo>
          <ItemList
            controlledFields={controlledFields}
            register={register}
            errors={errors}
            append={append}
            remove={remove}
            setValue={setValue}
          ></ItemList>
        </form>
        <ErrorList errors={errors}></ErrorList>
      </div>

      <ButtonGroup
        id={id}
        handleClose={handleClose}
        setStatus={setStatus}
        isCreating={isCreating}
      ></ButtonGroup>
    </Modal>
  );
}
