import firebase from "../firebase.js";
import Invoice from "../Models/invoiceModal.js";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase);

export async function createInvoice(req, res, next) {
  try {
    const data = req.body;
    const newInvoice = await addDoc(collection(db, "invoices"), data);
    res.status(200).send({ id: newInvoice.id, ...data });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getInvoices(req, res, next) {
  try {
    const invoices = await getDocs(collection(db, "invoices"));
    const invoiceArray = [];

    if (invoices.empty) {
      res.status(200).send([]);
    } else {
      invoices.forEach((doc) => {
        const invoice = new Invoice(
          doc.id,
          doc.data().createdAt,
          doc.data().paymentDue,
          doc.data().description,
          doc.data().paymentTerms,
          doc.data().clientName,
          doc.data().clientEmail,
          doc.data().status,
          doc.data().senderAddress,
          doc.data().clientAddress,
          doc.data().items,
          doc.data().total
        );
        invoiceArray.push(invoice);
      });

      res.status(200).send(invoiceArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateInvoice(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const invoice = doc(db, "invoices", id);
    await updateDoc(invoice, data);
    res.status(200).send("invoice updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteInvoice(req, res, next) {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "invoices", id));
    res.status(200).send("invoice deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
