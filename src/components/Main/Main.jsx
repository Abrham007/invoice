import InvoiceListEmpty from "./InvoiceListEmpty";
import Header from "./Header";
import InvoiceList from "./InvoiceList";

export default function Main() {
  return (
    <main className="w-[327px] md:w-[672px] lg:w-[730px] min-h-screen py-[108px] md:py-[142px] lg:py-[78px] mx-auto flex flex-col item-center gap-[32px] md:gap-[55px] lg:gap-[70px]">
      <Header></Header>
      <InvoiceList></InvoiceList>
      {/* <InvoiceListEmpty></InvoiceListEmpty> */}
    </main>
  );
}
