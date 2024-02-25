export default class Invoice {
  constructor(
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.paymentDue = paymentDue;
    this.description = description;
    this.paymentTerms = paymentTerms;
    this.clientName = clientName;
    this.clientEmail = clientEmail;
    this.status = status;
    this.senderAddress = senderAddress;
    this.clientAddress = clientAddress;
    this.items = items;
    this.total = total;
  }
}
