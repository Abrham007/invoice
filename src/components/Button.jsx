export default function Button({ children, type, ...props }) {
  let cssClass = "";
  switch (type) {
    case "1":
      cssClass =
        "pl-[8px] pr-[17px] h-[48px] rounded-full bg-1 flex gap-4 justify-center items-center self-center text-white text-baseS font-bold hover:bg-2";
      break;
    case "2":
      cssClass = "px-[23px] h-[48px] rounded-full text-white text-baseS bg-1 hover:bg-2 font-bold";
      break;
    case "3":
      cssClass =
        "px-[23px] h-[48px] rounded-full text-white text-baseS bg-[#F9FAFE] hover:bg-5 dark:bg-4 dark:hover:bg-white text-7 text-base dark:text-5 ";
      break;
    case "4":
      cssClass =
        "px-[23px] h-[48px] rounded-full bg-[#373B53] hover:bg-8 dark:hover:bg-3 text-6 dark:text-5 text-baseS  font-bold";
      break;
    case "5":
      cssClass = "px-[23px] h-[48px] rounded-full bg-9 hover:bg-10 text-white text-baseS  font-bold";
      break;
    case "6":
      cssClass = "w-full h-[48px] rounded-full bg-[#F9FAFE] hover:bg-5 text-7 text-baseS  font-bold";
      break;
    default:
  }

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
