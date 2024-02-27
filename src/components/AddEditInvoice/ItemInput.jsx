import { useMediaQuery } from "react-responsive";
export default function ItemInput({ label, register, index, errors, name }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  let inputCss =
    "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";

  if (isBigScreen) {
    inputCss =
      "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";
  }
  return (
    <label className="w-full flex flex-col gap-[9px] cursor-pointer">
      <p className="w-full  flex md:hidden justify-between">
        <span className="text-sm text-7 dark:text-5">{label}</span>
        {false && (
          <span className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            can't be empty
          </span>
        )}
      </p>

      <input
        {...register(`items.${index}.${name}`)}
        className={inputCss}
        type="text"
      ></input>
    </label>
  );
}
