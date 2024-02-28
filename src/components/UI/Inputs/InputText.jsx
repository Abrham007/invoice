export default function InputText({
  label,
  type = "text",
  register = () => {},
  errors = {},
  name,
  validation = { required: { value: true, message: "can't be empty" } },
  ...props
}) {
  let labelStyles = "text-sm text-7 dark:text-5";
  let inputStyles =
    "w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer";

  if (Object.keys(errors).length !== 0) {
    labelStyles += " text-9";
    inputStyles += " border-9";
  }

  return (
    <label className="w-full flex flex-col gap-[9px] cursor-pointer">
      <p className="w-full flex justify-between">
        <span className={labelStyles}>{label}</span>
        {Object.keys(errors).length !== 0 && (
          <span className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            {errors.message}
          </span>
        )}
      </p>

      <input
        {...register(`${name}`, validation)}
        className={inputStyles}
        type={type}
        {...props}
      ></input>
    </label>
  );
}
