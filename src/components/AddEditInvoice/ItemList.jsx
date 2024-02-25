import Button from "../UI/Buttons/Button";
import Item from "./Item";
import { useContext, useState } from "react";
import { DataContext } from "../../store/DataContext";

export default function ItemList({ id }) {
  const { data } = useContext(DataContext);
  const currentInvoice = data.find((invoice) => invoice.id === id);
  const tempItemList = currentInvoice?.items || [];
  const [itemList, setItemList] = useState(tempItemList);

  function addItem() {
    setItemList((prevValue) => [...prevValue, {}]);
  }

  function removeItem(index) {
    setItemList((prevValue) => {
      let tempValue = [...prevValue];
      tempValue.splice(index, 1);
      return tempValue;
    });
  }

  return (
    <fieldset className="min-w-[100%] flex flex-col gap-[22px]">
      <h3 className="text-[1.125rem]/8 text-[#777F98] -tracking-[0.02344rem] font-bold">
        Item List
      </h3>
      <div className="flex flex-col gap-[49px] md:gap-[15px]">
        <h4 className="hidden md:flex gap-4">
          <span id="itemLabel" className="w-[200px] text-sm text-7 dark:text-5">
            Item Name
          </span>
          <span id="qtyLabel" className="w-[55px] text-sm text-7 dark:text-5">
            Qty.
          </span>
          <span
            id="priceLabel"
            className="w-[100px] text-sm text-7 dark:text-5"
          >
            Price
          </span>
          <span className="w-[56px] text-sm text-7 dark:text-5">Total</span>
        </h4>
        <ul className="flex flex-col gap-[49px] md:gap-[18px] list-none">
          {itemList.map((item, index) => (
            <li key={index} className=" group">
              <Item {...item} removeItem={removeItem} index={index}></Item>
            </li>
          ))}
        </ul>
        <Button onClick={addItem} type="3">
          + Add New Item
        </Button>
      </div>
    </fieldset>
  );
}
