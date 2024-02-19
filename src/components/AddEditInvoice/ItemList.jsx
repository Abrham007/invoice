import InputText from "../InputText";

import Button from "../Button";
import Item from "./Item";

export default function ItemList() {
  return (
    <fieldset className="flex flex-col gap-[22px]">
      <h3 className="text-[1.125rem]/8 text-[#777F98] -tracking-[0.02344rem] font-bold">
        Item List
      </h3>
      <div className="flex flex-col gap-[49px]">
        <Item></Item>
        <Item></Item>
        <Button type="3">+ Add New Item</Button>
      </div>
    </fieldset>
  );
}