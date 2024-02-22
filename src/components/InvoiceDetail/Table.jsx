import { useMediaQuery } from "react-responsive";
export default function Table({ items, total }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <table className="flex flex-col bg-[#F9FAFE] dark:bg-4 rounded-lg">
      <thead className="hidden md:block pt-8 px-8">
        <tr className="md:flex">
          <th className="text-sm/4.5 text-7 dark:text-5 w-[150px] text-left  ">
            Item Name
          </th>
          <th className="text-sm/4.5 text-7 dark:text-5 w-[75px] ml-auto">
            QTY.
          </th>
          <th className="text-sm/4.5 text-7 dark:text-5 w-[125px] text-right">
            Price
          </th>
          <th className="text-sm/4.5 text-7 dark:text-5 w-[125px] text-right">
            Total
          </th>
        </tr>
      </thead>

      <tbody className="p-6 md:p-8 flex flex-col gap-6 md:gap-8 ">
        {items.map((item) => (
          <tr key={item.name} className="flex justify-between">
            <td className="flex flex-col gap-2 md:w-[150px] ">
              <strong className="text-base text-8 dark:text-white">
                {item.name}
              </strong>
              <span className="text-base text-7 dark:text-6 md:hidden">
                {item.quantity} x £ {item.price}
              </span>
            </td>
            <td className="hidden md:inline-block text-base text-7 dark:text-5 md:w-[75px] text-center ml-auto">
              {item.quantity}
            </td>
            <td className="hidden md:inline-block text-base text-7 dark:text-5 md:w-[125px] text-right">
              £ {item.price}
            </td>
            <td className="text-base text-8 dark:text-white md:w-[125px] text-right">
              £ {item.total}
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className="h-20 bg-[#373B53] dark:bg-8 rounded-b-lg">
        <tr className="h-full w-full px-6 md:px-8 flex justify-between items-center">
          <td className="text-sm/4.5 text-white">
            {isBigScreen ? "Amount Due" : "Grand Total"}
          </td>
          <td className="text-lg/8 text-white">£ {total}</td>
        </tr>
      </tfoot>
    </table>
  );
}
