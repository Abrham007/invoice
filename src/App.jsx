import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar";
import DataContextProvider from "./store/DataContext";
import ThemeContextProvider from "./theme/ThemeContext";
import { Routes, Route, Navigate } from "react-router-dom";

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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </DataContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
