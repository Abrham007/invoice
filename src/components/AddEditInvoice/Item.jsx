import InputText from "../InputText";
import deleteIcon from "../../assets/icon-delete.svg";
export default function Item() {
  return (
    <fieldset className="flex flex-col md:flex-row gap-[15px]">
      <InputText label="Item Name"></InputText>
      <fieldset className="w-full flex gap-4">
        <span className="w-[64px]">
          <InputText label="Qty."></InputText>
        </span>
        <span className="w-[100px]">
          <InputText label="Price"></InputText>
        </span>
        <span className="w-[100px] flex flex-col gap-[27px]">
          <span className="text-sm text-7 dark:text-5">Total</span>
          <span className="text-sm text-7 dark:text-5 font-bold">156.00</span>
        </span>
        <span className=" flex justify-end items-end pb-4">
          <button>
            <img src={deleteIcon} alt=""></img>
          </button>
        </span>
      </fieldset>
    </fieldset>
  );
}
