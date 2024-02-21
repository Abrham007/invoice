import InputDate from "../UI/Inputs/InputDate";
import InputDropdown from "../UI/Inputs/InputDropdown";
import InputText from "../UI/Inputs/InputText";
export default function InvoiceInfo() {
  return (
    <fieldset className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <InputDate lable="Invoice Date"></InputDate>
        <InputDropdown label="Payment Terms"></InputDropdown>
      </div>

      <InputText label="Project Description"></InputText>
    </fieldset>
  );
}
