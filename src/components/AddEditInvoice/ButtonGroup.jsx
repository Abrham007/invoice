import Button from "../UI/Buttons/Button";

export default function ButtonGroup({
  setStatus,
  handleClose,
  id,
  isCreating,
}) {
  function closeInvoice() {
    handleClose();
  }

  function saveAsDraft() {
    setStatus("draft");
  }

  if (id) {
    return (
      <div className="sticky bottom-0 left-0 w-screen md:w-full  p-6 flex gap-2 justify-end items-center bg-white dark:bg-3 shadow-xl md:rounded-r-[20px]">
        <Button $type="3" onClick={closeInvoice}>
          Cancel
        </Button>
        <Button $type="2" form="invoiceForm" type="submit">
          Save Changes
        </Button>
      </div>
    );
  } else {
    return (
      <div className="sticky bottom-0 left-0 w-screen md:w-full  p-6 flex gap-2 justify-between items-center bg-white dark:bg-3 shadow-xl md:rounded-r-[20px]">
        <Button $type="3" onClick={closeInvoice}>
          Discard
        </Button>

        <div className="flex gap-2">
          <Button
            $type="4"
            form="invoiceForm"
            type="submit"
            onClick={saveAsDraft}
          >
            Save as Draft
          </Button>
          <Button $type="2" form="invoiceForm" type="submit">
            {isCreating ? "Sending..." : "Save & Send"}
          </Button>
        </div>
      </div>
    );
  }
}
