import InputText from "../UI/Inputs/InputText";
export default function BillFrom() {
  return (
    <fieldset className="flex flex-col gap-6">
      <h3 className="text-base text-1">Bill From</h3>
      <InputText label="Street Address"></InputText>
      <div className="flex gap-6">
        <InputText label="City"></InputText>
        <InputText label="Post Code"></InputText>
      </div>
      <InputText label="Country"></InputText>
    </fieldset>
  );
}
