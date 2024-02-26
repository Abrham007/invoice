import { createContext, useEffect, useReducer, useState } from "react";
import { fetchInvoices, postInvoice } from "../http";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function createInvoice(newInvoice) {
    const createdInvoice = await postInvoice(newInvoice);
    setData((prevValue) => [...prevValue, createdInvoice]);
  }

  useEffect(() => {
    async function getInvoices() {
      try {
        setIsLoading(true);
        let invoiceArray = await fetchInvoices();
        setData(invoiceArray);
      } catch (error) {
        setError({ message: error.message });
      }

      setIsLoading(false);
    }

    getInvoices();
  }, []);

  const cxtValue = {
    data,
    isLoading,
    error,
  };

  return (
    <DataContext.Provider value={cxtValue}>{children}</DataContext.Provider>
  );
}
