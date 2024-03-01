import Status from "../Status";
import leftIcon from "../../assets/icon-arrow-left.svg";
import Address from "./Address";
import Table from "./Table";
import ButtonGroup from "./ButtonGroup";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";
import { Link, useParams } from "react-router-dom";
import Modal from "../Modal";
import Error from "../Error";

export default function InvoiceDetail() {
  let { id } = useParams();

  const { data, error, setError } = useContext(DataContext);

  const currentInvoice = data.find((invoice) => invoice.id === id);

  return (
    <main className="mx-auto min-h-screen py-[108px] md:py-[142px] lg:py-[78px] flex flex-col gap-8 w-[327px] md:w-[730px]">
      <Link to={`/`} className="flex gap-6  items-start self-start">
        <img src={leftIcon} alt=""></img>
        <span className="text-base text-8 dark:text-white hover:text-7">
          Go Back
        </span>
      </Link>
      <section className="flex flex-col gap-4">
        <header className="px-6 h-[91px] flex justify-between md:gap-5 md:justify-start items-center bg-white dark:bg-3 rounded-lg shadow">
          <p className="text-sm text-[#858BB2] dark:text-5">Status</p>
          <Status>{currentInvoice.status}</Status>
          <div className="hidden md:flex md:gap-2 md:ml-auto">
            <ButtonGroup id={id}></ButtonGroup>
          </div>
        </header>
        <div className="flex flex-col gap-8 p-6 bg-white dark:bg-3 rounded-lg">
          <div className="flex flex-col gap-[30px] md:flex-row md:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-8 dark:text-white text-base  ">
                <span className="text-7 font-bold text-base md:text-base/6">
                  #
                </span>
                {currentInvoice.id}
              </h2>
              <p className="text-sm text-7 dark:text-5">
                {currentInvoice.description}
              </p>
            </div>
            <Address {...currentInvoice.senderAddress}></Address>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-[119px]">
            <div className="flex gap-[62px] md:gap-[119px]">
              <div className="flex flex-col gap-8">
                <p className="flex flex-col gap-3">
                  <span className="text-sm text-7 dark:text-5">
                    Invoice Date
                  </span>
                  <strong className="text-base/5 text-8 dark:text-white">
                    {currentInvoice.createdAt}
                  </strong>
                </p>
                <p className="flex flex-col gap-3">
                  <span className="text-sm text-7 dark:text-5">
                    Payment Due
                  </span>
                  <strong className="text-base/5 text-8 dark:text-white">
                    {currentInvoice.paymentDue}
                  </strong>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex flex-col gap-3">
                  <span className="text-sm text-7 dark:text-5">Bill To</span>
                  <strong className="text-base/5 text-8 dark:text-white">
                    Alex Grim
                  </strong>
                </p>
                <Address {...currentInvoice.clientAddress}></Address>
              </div>
            </div>
            <p className="flex flex-col gap-3">
              <span className="text-sm text-7 dark:text-5">Sent to</span>
              <strong className="text-base/5 text-8 dark:text-white">
                {currentInvoice.clientEmail}
              </strong>
            </p>
          </div>
          <Table
            items={currentInvoice.items}
            total={currentInvoice.total}
          ></Table>
        </div>
      </section>
      <footer className="md:hidden fixed bottom-0 left-0 w-screen h-[91px] px-6 flex gap-2 justify-center items-center shadow bg-white dark:bg-3">
        <ButtonGroup id={id}></ButtonGroup>
      </footer>
      {error && (
        <Modal
          isOpen={error}
          setIsOpen={setError}
          className="backdrop:opacity-50 backdrop:bg-[#000]"
        >
          <Error message={error.message}></Error>
        </Modal>
      )}
    </main>
  );
}
