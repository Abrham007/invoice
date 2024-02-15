import emptyillustration from "../assets/illustration-empty.svg";
export default function InvoiceListEmpty() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[225px] h-[278px] flex gap-6 flex-col justify-center items-center">
        <img src={emptyillustration} alt="a women holding a speaker phone" width={193} height={160}></img>
        <h2 className="mt-auto text-8 dark:text-white text-lg   font-bold">There is nothing here</h2>
        <p className="text-6 dark:text-5 text-smS text-center font-medium">
          Create an invoice by clicking the New button and get started
        </p>
      </div>
    </div>
  );
}
