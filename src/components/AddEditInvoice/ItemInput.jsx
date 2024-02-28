import { useMediaQuery } from "react-responsive";
export default function ItemInput({
  label,
  register,
  index,
  errors,
  name,
  remove,
  ...rest
}) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  let inputCss =
    "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";

  if (isBigScreen) {
    inputCss =
      "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";
  }

  if (errors.items?.[index]?.price) {
    inputCss += " border-[#EC5757]";
  }

  return (
    <label className="w-full flex flex-col gap-[9px] cursor-pointer">
      <span className="w-full md:hidden text-sm text-7 dark:text-5">
        {label}
      </span>

      <input
        {...register(`items.${index}.${name}`, { required: true })}
        className={inputCss}
        type="text"
        {...rest}
      ></input>
    </label>
  );
}
