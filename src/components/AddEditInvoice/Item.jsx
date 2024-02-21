import InputText from "../UI/Inputs/InputText";
import { useMediaQuery } from "react-responsive";
import IconDelete from "../UI/Icons/IconDelete";

export default function Item() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  let inputCss =
    "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";

  return (
    <fieldset className="flex flex-col md:flex-row gap-[15px]">
      {isBigScreen ? (
        <input
          className={inputCss}
          type="text"
          aria-labelledby="itemLabel"
        ></input>
      ) : (
        <InputText label="Item Name"></InputText>
      )}
      <fieldset className="w-full flex gap-4">
        <span className="w-[64px]">
          {isBigScreen ? (
            <input
              className={inputCss}
              type="text"
              aria-labelledby="qtyLabel"
            ></input>
          ) : (
            <InputText label="Qty."></InputText>
          )}
        </span>
        <span className="w-[100px]">
          {isBigScreen ? (
            <input
              className={inputCss}
              type="text"
              aria-labelledby="priceLabel"
            ></input>
          ) : (
            <InputText label="Price"></InputText>
          )}
        </span>
        <span className="w-[100px] flex flex-col gap-[27px] md:justify-center">
          <span className="text-sm text-7 dark:text-5 md:hidden">Total</span>
          <span className="text-sm text-7 dark:text-5 font-bold">156.00</span>
        </span>
        <span className=" flex justify-end items-end pb-4">
          <button className="">
            <IconDelete></IconDelete>
          </button>
        </span>
      </fieldset>
    </fieldset>
  );
}
