export default function Status({ children }) {
  let styleOfDot = "w-2 h-2 rounded-full";
  let styleOfText = "text-base font-bold";
  switch (children) {
    case "Paid":
      styleOfDot += " bg-[#33D69F]";
      styleOfText += " text-[#33D69F]";
      break;
    case "Pending":
      styleOfDot += " bg-[#FF8F00]";
      styleOfText += " text-[#FF8F00]";
      break;
    case "Draft":
      styleOfDot += " bg-[#373B53]";
      styleOfText += " text-[#373B53]";
      break;
    default:
      styleOfDot += " bg-[#33D69F]";
      styleOfText += " text-[#33D69F]";
  }
  return (
    <p className="md:mr-[20px] col-start-2 col-end-3 row-start-2 row-end-4 justify-self-end self-center h-[40px] w-[104px] bg-[#33D69F10]  rounded-md flex justify-center items-center gap-2">
      <span role="presentation" className={styleOfDot}></span>
      <span className={styleOfText}>{children}</span>
    </p>
  );
}
