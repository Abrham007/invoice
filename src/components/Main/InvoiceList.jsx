import Invoice from "./Invoice";

export default function InvoiceList({ data }) {
  return (
    <ul className="w-full flex flex-col gap-4 list-none">
      {data.map((invoiceData) => (
        <li key={invoiceData.id} className="w-full">
          <Invoice {...invoiceData}></Invoice>
        </li>
      ))}
    </ul>
  );
}
