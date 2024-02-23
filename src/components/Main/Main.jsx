import InvoiceListEmpty from "./InvoiceListEmpty";
import Header from "./Header";
import InvoiceList from "./InvoiceList";
import { useContext, useState } from "react";
import { DataContext } from "../../store/DataContext";

export default function Main({ openAddInvoice }) {
  const { data } = useContext(DataContext);
  const [invoiceList, setinvoiceList] = useState(data);

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

  return (
    <main className="w-[327px] md:w-[672px] lg:w-[730px] min-h-screen py-[108px] md:py-[142px] lg:py-[78px] mx-auto flex flex-col item-center gap-[32px] md:gap-[55px] lg:gap-[70px]">
      <Header
        onChange={handleFilterStatus}
        openAddInvoice={openAddInvoice}
      ></Header>
      {data.length !== 0 ? (
        <InvoiceList data={invoiceList}></InvoiceList>
      ) : (
        <InvoiceListEmpty></InvoiceListEmpty>
      )}
    </main>
  );
}
