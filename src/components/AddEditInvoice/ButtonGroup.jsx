import Button from "../UI/Buttons/Button";

export default function ButtonGroup({ handleSubmit, handleClose, id }) {
  function closeInvoice() {
    handleClose();
  }

  if (id) {
    return (
      <div className="sticky bottom-0 left-0 w-screen md:w-full  p-6 flex gap-2 justify-end items-center bg-white dark:bg-3 shadow-xl md:rounded-r-[20px]">
        <Button $type="3" onClick={closeInvoice}>
          Cancel
        </Button>
        <Button $type="2">Save Changes</Button>
      </div>
    );
  } else {
    return (
      <div className="sticky bottom-0 left-0 w-screen md:w-full  p-6 flex gap-2 justify-between items-center bg-white dark:bg-3 shadow-xl md:rounded-r-[20px]">
        <Button $type="3" onClick={closeInvoice}>
          Discard
        </Button>

        <div className="flex gap-2">
          <Button $type="4">Save as Draft</Button>
          <Button $type="2" form="invoiceForm" type="submit">
            Save & Send
          </Button>
        </div>
      </div>
    );
  }
}
