import Invoice from "./Invoice";

export default function InvoiceList() {
  return (
    <ul className="w-full flex flex-col gap-4 list-none">
      <li className="w-full">
        <Invoice></Invoice>
      </li>
      <li className="w-full">
        <Invoice></Invoice>
      </li>
      <li className="w-full">
        <Invoice></Invoice>
      </li>
      <li className="w-full">
        <Invoice></Invoice>
      </li>
    </ul>
  );
}
