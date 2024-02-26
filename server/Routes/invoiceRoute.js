import express from "express";

import {
  createInvoice,
  deleteInvoice,
  getInvoices,
  updateInvoice,
} from "../Controller/invoiceControllers.js";

const router = express.Router();

router.get("/", getInvoices);
router.post("/new", createInvoice);
router.put("/update/:id", updateInvoice);
router.delete("/delete/:id", deleteInvoice);

export default router;
