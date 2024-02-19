import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen = true, setIsOpen }) {
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
      className="pb-[155px] absolute top-[105px] left-0 w-screen backdrop:opacity-50  backdrop:bg-[#000] backdrop::bg-origin-content"
    >
      {isOpen && children}
    </dialog>,
    document.getElementById("modal")
  );
}
