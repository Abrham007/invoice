export default function InputText({
  label,
  type = "text",
  register = () => {},
  errors = {},
  name,
  ...props
}) {
  return (
    <label className="w-full flex flex-col gap-[9px] cursor-pointer">
      <p className="w-full flex justify-between">
        <span className="text-sm text-7 dark:text-5">{label}</span>
        {errors[name] && (
          <span className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            can't be empty
          </span>
        )}
      </p>

      <input
        {...register(`${name}`, { required: true })}
        className="w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white dark:bg-3 outline-none border border-5 dark:border-[#252945] hover:border-[#9277FF] cursor-pointer"
        type={type}
        {...props}
      ></input>
    </label>
  );
}
