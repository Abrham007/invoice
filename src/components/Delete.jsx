import Button from "./UI/Buttons/Button";

export default function Delete() {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[327px] h-[220px] md:w-[480px] md:h-[249px] flex flex-col gap-2 bg-white dark:bg-3 shadow rounded-lg p-8 md:p-12">
      <h2 className="text-lg/8 text-8 dark:text-white">Confirm Deletion</h2>
      <p className="text-sm leading-[1.375rem] text-6">
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <form method="dialog" className="flex justify-end gap-2 mt-auto">
        <Button type="3">Cancel</Button>
        <Button type="5">Delete</Button>
      </form>
    </div>
  );
}
