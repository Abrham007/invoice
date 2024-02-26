import { useRef, useState } from "react";
import Button from "../UI/Buttons/Button";
import Modal from "../Modal";
import Delete from "../Delete";
import AddEditInvoice from "../AddEditInvoice/AddEditInvoice";
export default function ButtonGroup({ id }) {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  function openEditInvoice() {
    setEditOpen(true);
  }

  function openDelete() {
    setDeleteOpen(true);
  }

  return (
    <>
      <Button $type="3" onClick={openEditInvoice}>
        Edit
      </Button>
      <Button $type="5" onClick={openDelete}>
        Delete
      </Button>
      <Button $type="2">Mark as Paid</Button>
      <Modal
        isOpen={isDeleteOpen}
        setIsOpen={setDeleteOpen}
        className="backdrop:opacity-50 backdrop:bg-[#000]"
      >
        <Delete></Delete>
      </Modal>
      {isEditOpen && (
        <AddEditInvoice
          id={id}
          isOpen={isEditOpen}
          handleClose={setEditOpen}
        ></AddEditInvoice>
      )}
    </>
  );
}
