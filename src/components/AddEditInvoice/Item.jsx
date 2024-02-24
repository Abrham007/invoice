import InputText from "../UI/Inputs/InputText";
import { useMediaQuery } from "react-responsive";
import IconDelete from "../UI/Icons/IconDelete";

export default function Item(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  let inputCss =
    "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";

  return (
    <fieldset className="flex flex-col md:flex-row gap-[15px]">
      <span className="w-[314px]">
        {isBigScreen ? (
          <input
            className={inputCss}
            type="text"
            aria-labelledby="itemLabel"
            defaultValue={props.name}
            width={214}
          ></input>
        ) : (
          <InputText label="Item Name" defaultValue={props.name}></InputText>
        )}
      </span>

      <fieldset className="w-full flex gap-4">
        <span className="w-[46px]">
          {isBigScreen ? (
            <input
              className={inputCss}
              type="text"
              aria-labelledby="qtyLabel"
              defaultValue={props.quantity}
              width={46}
            ></input>
          ) : (
            <InputText label="Qty." defaultValue={props.quantity}></InputText>
          )}
        </span>
        <span className="w-[100px]">
          {isBigScreen ? (
            <input
              className={inputCss}
              type="text"
              aria-labelledby="priceLabel"
              defaultValue={props.price}
              width={100}
            ></input>
          ) : (
            <InputText label="Price" defaultValue={props.price}></InputText>
          )}
        </span>
        <span className=" flex flex-col gap-[27px] md:justify-center">
          <span className="text-sm text-7 dark:text-5 md:hidden">Total</span>
          <span className="text-sm text-7 dark:text-5 font-bold">
            {props.total}
          </span>
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
