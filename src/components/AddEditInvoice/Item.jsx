import IconDelete from "../UI/Icons/IconDelete";
import ItemInput from "./ItemInput";

export default function Item(props) {
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
          ></ItemInput>
        </span>
        <span className="w-[100px] shrink-0">
          <ItemInput
            {...props}
            placeholder="0.00"
            name="price"
            label="Price"
          ></ItemInput>
        </span>
        <span className="w-[56px] flex flex-col gap-[27px] md:justify-center">
          <span className="text-sm text-7 dark:text-5 md:hidden">Total</span>
          <span className="text-base text-7 dark:text-5 font-bold">
            {props.fields?.total
              ? Number(props.fields.total).toFixed(2)
              : Number(props.field.quantity * props.field.price).toFixed(2)}
          </span>
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
