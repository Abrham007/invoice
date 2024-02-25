import firebase from "../firebase";
import Invoice from "../Models/invoiceModal";
import Item from "../Models/itemModal";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase);

export async function createInvoice(req, res, next) {
  try {
    const data = req.body;
    await addDoc(collection(db, "invoices"), data);
    res.status(200).send("invoice created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
