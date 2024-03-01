import InvoiceListEmpty from "./InvoiceListEmpty";
import Header from "./Header";
import InvoiceList from "./InvoiceList";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/DataContext";
import AddEditInvoice from "../AddEditInvoice/AddEditInvoice";
import Modal from "../Modal";
import Error from "../Error";

export default function Main() {
  const { data, isLoading, error, setError } = useContext(DataContext);

  const [invoiceList, setinvoiceList] = useState(data);
  const [isAddOpen, setAddOpen] = useState(false);

  function openAddInvoice() {
    setAddOpen(true);
  }

  function closeAddInvoice() {
    setAddOpen(false);
  }

  function handleFilterStatus(e) {
    switch (e.target.value) {
      case "all":
        setinvoiceList(data);
        break;
      case "draft":
        setinvoiceList(data.filter((invoice) => invoice.status === "draft"));
        break;
      case "pending":
        setinvoiceList(data.filter((invoice) => invoice.status === "pending"));
        break;
      case "paid":
        setinvoiceList(data.filter((invoice) => invoice.status === "paid"));
        break;
      default:
        setinvoiceList(data);
    }
  }
  let invoices;
  if (data.length !== 0) {
    invoices = <InvoiceList data={invoiceList}></InvoiceList>;
  } else {
    if (isLoading) {
      invoices = <InvoiceListEmpty reason="loading"></InvoiceListEmpty>;
    } else {
      invoices = <InvoiceListEmpty reason="empty"></InvoiceListEmpty>;
    }
  }

  useEffect(() => {
    setinvoiceList(data);
  }, [data]);

  return (
    <main className="w-[327px] md:w-[672px] lg:w-[730px] min-h-screen py-[108px] md:py-[142px] lg:py-[78px] mx-auto flex flex-col item-center gap-[32px] md:gap-[55px] lg:gap-[70px]">
      <Header
        data={invoiceList}
        onChange={handleFilterStatus}
        openAddInvoice={openAddInvoice}
      ></Header>
      {invoices}
      {isAddOpen && (
        <AddEditInvoice
          isOpen={isAddOpen}
          handleClose={closeAddInvoice}
        ></AddEditInvoice>
      )}
      {error && (
        <Modal
          isOpen={error}
          setIsOpen={setError}
          className="backdrop:opacity-50 backdrop:bg-[#000]"
        >
          <Error message={error.message}></Error>
        </Modal>
      )}
    </main>
  );
}
