import AddEditInvoice from "./components/AddEditInvoice/AddEditInvoice";
import Delete from "./components/Delete";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import Main from "./components/Main/Main";
import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import DataContextProvider from "./store/DataContext";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-11 dark:bg-12">
      <DataContextProvider>
        <SideBar></SideBar>
        {/* <Main></Main> */}
        {/* <InvoiceDetail></InvoiceDetail> */}
        <AddEditInvoice></AddEditInvoice>
        {/* <Modal>
        <Delete></Delete>
      </Modal> */}
      </DataContextProvider>
    </div>
  );
}
