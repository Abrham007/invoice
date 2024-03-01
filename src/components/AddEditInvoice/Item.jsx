import { useEffect } from "react";
import IconDelete from "../UI/Icons/IconDelete";
import ItemInput from "./ItemInput";

export default function Item({ setValue, ...props }) {
  useEffect(() => {
    let currentTotal = Number(props.field.quantity * props.field.price).toFixed(
      2
    );
    setValue(`items.${props.index}.total`, currentTotal);
  }, [props.field.quantity, props.field.price, props.index, setValue]);

  return (
    <fieldset className="min-w-full flex flex-col md:flex-row gap-[15px]">
      <span className="md:w-[200px] shrink-0">
        <ItemInput {...props} name="name" label="Item Name"></ItemInput>
      </span>

      <fieldset className="w-full flex gap-4">
        <span className="w-[64px] md:w-[55px] shrink-0">
          <ItemInput
            {...props}
            placeholder="0"
            name="quantity"
            label="Qty."
            type="number"
          ></ItemInput>
        </span>
        <span className="w-[100px] shrink-0">
          <ItemInput
            {...props}
            placeholder="0.00"
            name="price"
            label="Price"
            type="number"
            step="0.01"
          ></ItemInput>
        </span>
        <span className="w-[56px] flex flex-col gap-[27px] md:justify-center">
          <ItemInput
            {...props}
            placeholder="0.00"
            name="total"
            label="Total"
            type="number"
            step="0.01"
            disabled={true}
          ></ItemInput>
        </span>
        <span className=" flex justify-end items-end pb-4 ">
          <button type="button" onClick={() => props.remove(props.index)}>
            <IconDelete></IconDelete>
          </button>
        </span>
      </fieldset>
    </fieldset>
  );
}
