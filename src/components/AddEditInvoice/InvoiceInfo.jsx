import InputDate from "../UI/Inputs/InputDate";
import InputDropdown from "../UI/Inputs/InputDropdown";
import InputText from "../UI/Inputs/InputText";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";
import { Controller } from "react-hook-form";
export default function InvoiceInfo({ id, register, errors, control }) {
  const { data } = useContext(DataContext);
  const currentInvoice = data.find((invoice) => invoice.id === id);

  return (
    <fieldset className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <InputDate
          control={control}
          name="invoiceDate"
          lable="Invoice Date"
          defaultValue={
            id ? currentInvoice.createdAt : new Date().toDateString()
          }
          disabled={id ? true : false}
        ></InputDate>
        <Controller
          control={control}
          name="paymentTerms"
          defaultValue={id ? currentInvoice.paymentTerms : 30}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputDropdown
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Payment Terms"
            ></InputDropdown>
          )}
        ></Controller>
      </div>

      <InputText
        name="description"
        register={register}
        errors={errors?.description}
        label="Project Description"
        defaultValue={id ? currentInvoice.description : ""}
        placeholder="e.g. Graphic Design Service"
      ></InputText>
    </fieldset>
  );
}
