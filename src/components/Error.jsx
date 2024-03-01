import Button from "./UI/Buttons/Button";

export default function Error({ message }) {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[327px] h-[220px] md:w-[480px] md:h-[249px] flex flex-col gap-2 bg-white dark:bg-3 shadow rounded-lg p-8 md:p-12">
      <h2 className="text-lg/8 text-8 dark:text-white">Something went wrong</h2>
      <p className="text-base font-medium leading-[1.375rem] text-6">
        {message}. Please make sure you are connected to the internet and try
        again after a few minutes.
      </p>
      <form method="dialog" className="flex justify-end gap-2 mt-auto">
        <Button $type="5">Close</Button>
      </form>
    </div>
  );
}
