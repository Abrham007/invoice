import InputText from "../UI/Inputs/InputText";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";
export default function BillFrom({ id, register, errors }) {
  const { data } = useContext(DataContext);
  const currentInvoice = data.find((invoice) => invoice.id === id);
  return (
    <fieldset className="flex flex-col gap-6">
      <h3 className="text-base text-1">Bill From</h3>
      <InputText
        name="senderAddress.street"
        register={register}
        errors={errors.senderAddress?.street}
        label="Street Address"
        defaultValue={id ? currentInvoice.senderAddress.street : ""}
      ></InputText>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex gap-6 md:w-2/3">
          <InputText
            name="senderAddress.city"
            register={register}
            errors={errors.senderAddress?.city}
            label="City"
            defaultValue={id ? currentInvoice.senderAddress.city : ""}
          ></InputText>
          <InputText
            name="senderAddress.postCode"
            register={register}
            errors={errors.senderAddress?.postCode}
            label="Post Code"
            defaultValue={id ? currentInvoice.senderAddress.postCode : ""}
          ></InputText>
        </div>
        <div className="md:w-1/3">
          <InputText
            name="senderAddress.country"
            register={register}
            errors={errors.senderAddress?.country}
            label="Country"
            defaultValue={id ? currentInvoice.senderAddress.country : ""}
          ></InputText>
        </div>
      </div>
    </fieldset>
  );
}
