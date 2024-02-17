import InputDate from "./InputDate";
import InputDropdown from "./InputDropdown";
import InputText from "./InputText";

export default function AddEditInvoice() {
  return (
    <div className="p-6 flex flex-col gap-[22px] bg-white">
      <h2 className="text-lg/8 text-8 dark:text-white font-bold">
        Edit <span className="text-6">#</span>XM9141
      </h2>
      <div className="flex flex-col gap-[41px]">
        <div className="flex flex-col gap-6">
          <h3 className="text-base text-1">Bill From</h3>
          <InputText label="Street Address"></InputText>
          <div className="flex gap-6">
            <InputText label="City"></InputText>
            <InputText label="Post Code"></InputText>
          </div>
          <InputText label="Country"></InputText>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-base text-1">Bill To</h3>
          <InputText label="Client’s Name"></InputText>
          <InputText label="Client’s Email" type="email"></InputText>
          <InputText label="Street Address"></InputText>
          <div className="flex gap-6">
            <InputText label="City"></InputText>
            <InputText label="Post Code"></InputText>
          </div>
          <InputText label="Country"></InputText>
        </div>

        <div>
          <InputDropdown></InputDropdown>
          <InputDate></InputDate>
        </div>
      </div>
    </div>
  );
}
