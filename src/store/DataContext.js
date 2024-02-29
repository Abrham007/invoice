import { createContext, useEffect, useReducer, useState } from "react";
import { deleteInvoice, fetchInvoices, postInvoice, putInvoice } from "../http";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  async function createInvoice(newInvoice) {
    try {
      setIsCreating(true);
      const createdInvoice = await postInvoice(newInvoice);
      setData((prevValue) => [createdInvoice, ...prevValue]);
    } catch (error) {
      setError({ message: error.message || "Failed to create invoice" });
    }
    setIsCreating(false);
  }

  async function updateInvoice(id, updatedInvoice) {
    setData((prevValue) => {
      let tempValue = [...prevValue];
      let updatedInvoiceIndex = tempValue.findIndex(
        (invoice) => invoice.id === id
      );
      tempValue[updatedInvoiceIndex] = { id: id, ...updatedInvoice };
      return tempValue;
    });

    try {
      await putInvoice(id, updatedInvoice);
    } catch (error) {
      setData(data);
      setError({ message: error.message || "Failed to update invoice" });
    }
  }

  async function removeInvoice(id) {
    setData((prevValue) =>
      [...prevValue].filter((invoice) => invoice.id !== id)
    );

    try {
      await deleteInvoice(id);
    } catch (error) {
      setData(data);
      setError({ message: error.message || "Failed to delete invoice" });
    }
  }

  useEffect(() => {
    async function getInvoices() {
      try {
        setIsLoading(true);
        let invoiceArray = await fetchInvoices();
        setData(invoiceArray);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch" });
      }

      setIsLoading(false);
    }

    getInvoices();
  }, []);

  const cxtValue = {
    data,
    isLoading,
    error,
    createInvoice,
    isCreating,
    updateInvoice,
    removeInvoice,
  };

  return (
    <DataContext.Provider value={cxtValue}>{children}</DataContext.Provider>
  );
}
