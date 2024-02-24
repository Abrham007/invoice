import InputText from "../UI/Inputs/InputText";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

export default function BillTo({ id }) {
  const { data } = useContext(DataContext);
  const currentInvoice = data.find((invoice) => invoice.id === id);

  return (
    <fieldset className="flex flex-col gap-6">
      <h3 className="text-base text-1">Bill To</h3>
      <InputText
        label="Client’s Name"
        defaultValue={id ? currentInvoice.clientName : ""}
      ></InputText>
      <InputText
        label="Client’s Email"
        type="email"
        defaultValue={id ? currentInvoice.clientEmail : ""}
        placeholder="e.g. email@example.com"
      ></InputText>
      <InputText
        label="Street Address"
        defaultValue={id ? currentInvoice.clientAddress.street : ""}
      ></InputText>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex gap-6 md:w-2/3">
          <InputText
            label="City"
            defaultValue={id ? currentInvoice.clientAddress.city : ""}
          ></InputText>
          <InputText
            label="Post Code"
            defaultValue={id ? currentInvoice.clientAddress.postCode : ""}
          ></InputText>
        </div>
        <div className="md:w-1/3">
          <InputText
            label="Country"
            defaultValue={id ? currentInvoice.clientAddress.country : ""}
          ></InputText>
        </div>
      </div>
    </fieldset>
  );
}
