const HOST = "http://localhost:4000";

export async function fetchInvoices() {
  const res = await fetch(HOST + "/api");
  const resData = await res.json();

  if (!res.ok) {
    throw Error("Error fetching the invoices");
  }

  return resData;
}

export async function postInvoice(newInvoice) {
  const res = await fetch(HOST + "/api/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newInvoice),
  });

  const resData = await res.json();

  if (!res.ok) {
    throw Error("Error posting the invoice");
  }

  return resData;
}
