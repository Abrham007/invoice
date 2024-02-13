import Invoice from "./Invoice";

export default function InvoiceList() {
  return (
    <ul className="w-full flex flex-col gap-4 list-none">
      <Invoice></Invoice>
      <Invoice></Invoice>
      <Invoice></Invoice>
      <Invoice></Invoice>
    </ul>
  );
}
