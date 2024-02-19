import InputDate from "../InputDate";
import InputDropdown from "../InputDropdown";
import InputText from "../InputText";
export default function InvoiceInfo() {
  return (
    <fieldset className="flex flex-col gap-6">
      <InputDate lable="Invoice Date"></InputDate>
      <InputDropdown label="Payment Terms"></InputDropdown>
      <InputText label="Project Description"></InputText>
    </fieldset>
  );
}
