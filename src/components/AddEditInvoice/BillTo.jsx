import InputText from "../UI/Inputs/InputText";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

export default function BillTo({ id, register, errors }) {
  const { data } = useContext(DataContext);
  const currentInvoice = data.find((invoice) => invoice.id === id);

  return (
    <fieldset className="flex flex-col gap-6">
      <h3 className="text-base text-1">Bill To</h3>
      <InputText
        name="clientName"
        register={register}
        errors={errors.clientName}
        label="Client’s Name"
        defaultValue={id ? currentInvoice.clientName : ""}
      ></InputText>
      <InputText
        name="clientEmail"
        register={register}
        errors={errors.clientEmail}
        label="Client’s Email"
        type="email"
        defaultValue={id ? currentInvoice.clientEmail : ""}
        placeholder="e.g. email@example.com"
      ></InputText>
      <InputText
        name="clientAddress.street"
        register={register}
        errors={errors.clientAddress?.street}
        label="Street Address"
        defaultValue={id ? currentInvoice.clientAddress.street : ""}
      ></InputText>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex gap-6 md:w-2/3">
          <InputText
            name="clientAddress.city"
            register={register}
            errors={errors.clientAddress?.city}
            label="City"
            defaultValue={id ? currentInvoice.clientAddress.city : ""}
          ></InputText>
          <InputText
            name="clientAddress.postCode"
            register={register}
            errors={errors.clientAddress?.postCode}
            label="Post Code"
            defaultValue={id ? currentInvoice.clientAddress.postCode : ""}
          ></InputText>
        </div>
        <div className="md:w-1/3">
          <InputText
            name="clientAddress.country"
            register={register}
            errors={errors.clientAddress?.country}
            label="Country"
            defaultValue={id ? currentInvoice.clientAddress.country : ""}
          ></InputText>
        </div>
      </div>
    </fieldset>
  );
}
