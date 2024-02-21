import Button from "../Button";
import Item from "./Item";
import { useMediaQuery } from "react-responsive";
export default function InputList() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="flex flex-col gap-[49px] md:gap-[15px]">
      <h4 className="hidden md:flex gap-4">
        <span id="itemLabel" className="w-[178px] text-sm text-7 dark:text-5">
          Item Name
        </span>
        <span id="qtyLabel" className="w-[60px] text-sm text-7 dark:text-5">
          Qty.
        </span>
        <span id="priceLabel" className="w-[95px] text-sm text-7 dark:text-5">
          Price
        </span>
        <span className="w-[56px] text-sm text-7 dark:text-5">Total</span>
      </h4>
      <ul className="flex flex-col gap-[49px] md:gap-[18px] list-none">
        <li className="group">
          <Item></Item>
        </li>
        <li className="group">
          <Item></Item>
        </li>
      </ul>
      <Button type="3">+ Add New Item</Button>
    </div>
  );
}
