import InputDate from "../UI/Inputs/InputDate";
import InputDropdown from "../UI/Inputs/InputDropdown";
import InputText from "../UI/Inputs/InputText";
import { Controller } from "react-hook-form";

export default function InvoiceInfo({ id, register, errors, control }) {
  return (
    <fieldset className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <InputDate
          control={control}
          name="createdAt"
          lable="Invoice Date"
          disabled={id ? true : false}
        ></InputDate>
        <Controller
          control={control}
          name="paymentTerms"
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
        placeholder="e.g. Graphic Design Service"
      ></InputText>
    </fieldset>
  );
}
