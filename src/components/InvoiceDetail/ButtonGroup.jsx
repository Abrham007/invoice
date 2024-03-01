import { useState } from "react";
import Button from "../UI/Buttons/Button";
import Modal from "../Modal";
import Delete from "../Delete";
import AddEditInvoice from "../AddEditInvoice/AddEditInvoice";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

export default function ButtonGroup({ id }) {
  const { data, updateInvoice } = useContext(DataContext);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  let currentInvoice = data.find((invoice) => invoice.id === id);
  const isPaid = currentInvoice.status === "paid";

  function openEditInvoice() {
    setEditOpen(true);
  }

  function openDelete() {
    setDeleteOpen(true);
  }

  function handleStatusChange() {
    let newInvoice = { ...currentInvoice, status: "paid" };
    updateInvoice(id, newInvoice);
  }

  return (
    <>
      <Button $type="3" onClick={openEditInvoice}>
        Edit
      </Button>
      <Button $type="5" onClick={openDelete}>
        Delete
      </Button>
      <Button $type="2" disabled={isPaid} onClick={handleStatusChange}>
        Mark as Paid
      </Button>
      <Modal
        isOpen={isDeleteOpen}
        setIsOpen={setDeleteOpen}
        className="backdrop:opacity-50 backdrop:bg-[#000]"
      >
        <Delete id={id}></Delete>
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
