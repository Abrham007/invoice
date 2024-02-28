export default function ErrorList({ errors, errorItems }) {
  return (
    <ul>
      <li>
        {Object.keys(errors).length !== 0 && (
          <p className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            - All fields must be added
          </p>
        )}
      </li>
      <li>
        {errorItems && (
          <p className="text-[0.625rem] font-semibold leading-[1.5] text-9">
            - An item must be added
          </p>
        )}
      </li>
    </ul>
  );
}
