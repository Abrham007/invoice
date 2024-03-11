import data from "../data.json" assert { type: "json" };
import firebase from "./firebase.js";
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

async function deleteEveryThing() {
  try {
    const invoices = await getDocs(collection(db, "invoices"));

    invoices.forEach(async (invoice) => {
      await deleteDoc(doc(db, "invoices", invoice.id));
    });

    console.log("Successfully deleted everything");
  } catch (error) {
    console.log(`Error deleting everything. ${error.message}`);
  }
}

async function reset() {
  await deleteEveryThing();
  data.forEach(async (invoice) => {
    delete invoice.id;
    try {
      const newInvoice = await addDoc(collection(db, "invoices"), invoice);
      console.log(`Finished creating invoiece ${newInvoice.id}`);
    } catch (error) {
      console.log("Error creating the invoice");
    }
  });
}

await reset();
