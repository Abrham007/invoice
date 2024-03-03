export async function fetchInvoices() {
  const res = await fetch("/api");

  if (!res.ok) {
    throw Error("Error fetching the invoices");
  }

  const resData = await res.json();

  return resData;
}

export async function postInvoice(newInvoice) {
  const res = await fetch("/api/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newInvoice),
  });

  if (!res.ok) {
    throw Error("Error posting the invoice");
  }

  const resData = await res.json();

  return resData;
}

export async function putInvoice(id, updatedInvoice) {
  const res = await fetch(`/api/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedInvoice),
  });

  if (!res.ok) {
    throw Error("Error updating the invoice");
  }

  const resData = await res.text();

  return resData;
}

export async function deleteInvoice(id) {
  const res = await fetch(`/api/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw Error("Error deleting the invoice");
  }

  const resData = await res.text();

  return resData;
}
