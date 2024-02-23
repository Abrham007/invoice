import Modal from "../Modal";
import { useMediaQuery } from "react-responsive";
export default function Wrapper({ children, isOpen }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  let wrapperStyle = "";
  if (isBigScreen) {
    wrapperStyle +=
      " min-h-screen md:w-[616px] md:pb-[80px] lg:pb-[0px] rounded-br-[20px] rounded-tr-[20px]  backdrop:opacity-50 backdrop:bg-[#000] md:backdrop:top-[80px] md:top-[80px] lg:backdrop:top-[0px] lg:top-[0px] lg:backdrop:left-[104px] lg:left-[104px] bg-white dark:bg-12";
    return (
      <Modal className={wrapperStyle} isOpen={isOpen}>
        {children}
      </Modal>
    );
  } else {
    wrapperStyle = " absolute top-20 left-0 w-screen bg-white dark:bg-12";
    return <section className={wrapperStyle}>{children}</section>;
  }
}
