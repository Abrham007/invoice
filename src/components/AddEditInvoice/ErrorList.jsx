export default function ErrorList({ errors }) {
  let hasEmptyField = Object.keys(errors).length !== 0;

  if (Object.keys(errors).length === 1) {
    if (Object.keys(errors)[0] === "items") {
      hasEmptyField = false;
    }
  }

  let hasNoItem = errors?.items;
  return (
    <ul>
      <li>
        {hasEmptyField && (
          <p className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            - All fields must be added
          </p>
        )}
      </li>
      <li>
        {hasNoItem && (
          <p className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            - An item must be added
          </p>
        )}
      </li>
    </ul>
  );
}
