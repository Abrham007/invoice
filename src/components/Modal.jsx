import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen, setIsOpen, ...props }) {
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
    <dialog ref={dialog} onClose={handelClose} {...props}>
      {isOpen && children}
    </dialog>,
    document.getElementById("modal")
  );
}
