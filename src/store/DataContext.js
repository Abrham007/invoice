import { createContext, useReducer } from "react";
import data from "../data.json";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
