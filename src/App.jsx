import AddEditInvoice from "./components/AddEditInvoice/AddEditInvoice";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="w-full h-full bg-11 dark:bg-12">
      <SideBar></SideBar>
      {/* <Main></Main> */}
      {/* <InvoiceDetail></InvoiceDetail> */}
      <AddEditInvoice></AddEditInvoice>
    </div>
  );
}
