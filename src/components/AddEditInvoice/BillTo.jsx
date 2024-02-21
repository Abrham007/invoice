import InputText from "../UI/Inputs/InputText";
export default function BillTo() {
  return (
    <fieldset className="flex flex-col gap-6">
      <h3 className="text-base text-1">Bill To</h3>
      <InputText label="Client’s Name"></InputText>
      <InputText label="Client’s Email" type="email"></InputText>
      <InputText label="Street Address"></InputText>
      <div className="flex gap-6">
        <InputText label="City"></InputText>
        <InputText label="Post Code"></InputText>
      </div>
      <InputText label="Country"></InputText>
    </fieldset>
  );
}
