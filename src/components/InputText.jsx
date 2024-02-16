export default function InputText({ label, type = "text", ...props }) {
  return (
    <label className="w-full flex flex-col gap-[9px]">
      <p className="w-full flex justify-between">
        <span className="text-sm text-7 dark:text-5">{label}</span>
        <span className="hidden text-[0.625rem] font-semibold leading-[1.5] text-9">
          can't be empty
        </span>
      </p>

      <input
        className="w-full pt-[18px] px-5 pb-[15px] text-base text-8 dark:text-white rounded bg-white outline-none border border-5 hover:border-[#9277FF] "
        type={type}
        {...props}
      ></input>
    </label>
  );
}
