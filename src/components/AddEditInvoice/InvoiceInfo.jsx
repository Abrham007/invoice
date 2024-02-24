import InputDate from "../UI/Inputs/InputDate";
import InputDropdown from "../UI/Inputs/InputDropdown";
import InputText from "../UI/Inputs/InputText";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";
export default function InvoiceInfo({ id }) {
  const { data } = useContext(DataContext);
  const currentInvoice = data.find((invoice) => invoice.id === id);

  return (
    <fieldset className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <InputDate
          lable="Invoice Date"
          defaultValue={
            id ? currentInvoice.createdAt : new Date().toDateString()
          }
          disabled={id ? true : false}
        ></InputDate>
        <InputDropdown
          label="Payment Terms"
          defaultValue={id ? currentInvoice.paymentTerms : 30}
        ></InputDropdown>
      </div>

      <InputText
        label="Project Description"
        defaultValue={id ? currentInvoice.description : ""}
        placeholder="e.g. Graphic Design Service"
      ></InputText>
    </fieldset>
  );
}
