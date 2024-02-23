export default function Status({ children }) {
  let styleOfDot = "w-2 h-2 rounded-full self-center mb-1";
  let styleOfText = "text-base font-bold ";
  let text = "";
  switch (children) {
    case "paid":
      styleOfDot += " bg-[#33D69F]";
      styleOfText += " text-[#33D69F]";
      text = "Paid";
      break;
    case "pending":
      styleOfDot += " bg-[#FF8F00]";
      styleOfText += " text-[#FF8F00]";
      text = "Pending";
      break;
    case "draft":
      styleOfDot += " bg-[#373B53]";
      styleOfText += " text-[#373B53]";
      text = "Draft";
      break;
    default:
      styleOfDot += " bg-[#33D69F]";
      styleOfText += " text-[#33D69F]";
      text = "Paid";
  }
  return (
    <div className="col-start-2 col-end-3 row-start-2 row-end-4 justify-self-end self-center h-[40px] w-[104px] bg-[#33D69F10]  rounded-md flex justify-center items-center">
      <p className="flex gap-2">
        <span role="presentation" className={styleOfDot}></span>
        <span className={styleOfText}>{text}</span>
      </p>
    </div>
  );
}
