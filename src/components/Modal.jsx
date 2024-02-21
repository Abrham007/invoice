import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  isOpen = true,
  setIsOpen,
  ...props
}) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  });

  function handelClose() {
    setIsOpen(false);
  }

  return createPortal(
    <dialog
      ref={dialog}
      onClose={handelClose}
      {...props}
      className="backdrop:opacity-50 backdrop:bg-[#000]"
    >
      {isOpen && children}
    </dialog>,
    document.getElementById("modal")
  );
}
