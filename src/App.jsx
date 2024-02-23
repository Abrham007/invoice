import { useState } from "react";
import AddEditInvoice from "./components/AddEditInvoice/AddEditInvoice";
import Delete from "./components/Delete";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import Main from "./components/Main/Main";
import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import DataContextProvider from "./store/DataContext";
import ThemeContextProvider from "./theme/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-11 dark:bg-12">
      <ThemeContextProvider>
        <DataContextProvider>
          <SideBar></SideBar>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route
              path="/invoicedetail/:id"
              element={<InvoiceDetail></InvoiceDetail>}
            ></Route>
          </Routes>

          {/* <Modal>
          <Delete></Delete>
        </Modal> */}
        </DataContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
