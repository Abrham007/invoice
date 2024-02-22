import InvoiceListEmpty from "./InvoiceListEmpty";
import Header from "./Header";
import InvoiceList from "./InvoiceList";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

export default function Main() {
  const { data } = useContext(DataContext);

  return (
    <main className="w-[327px] md:w-[672px] lg:w-[730px] min-h-screen py-[108px] md:py-[142px] lg:py-[78px] mx-auto flex flex-col item-center gap-[32px] md:gap-[55px] lg:gap-[70px]">
      <Header></Header>
      {data.length !== 0 ? (
        <InvoiceList data={data}></InvoiceList>
      ) : (
        <InvoiceListEmpty></InvoiceListEmpty>
      )}
    </main>
  );
}
