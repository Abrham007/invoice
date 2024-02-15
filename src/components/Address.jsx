export default function Address({ street, city, zone, country }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-7 dark:text-5">{street}</p>
      <p className="text-sm text-7 dark:text-5">{city}</p>
      <p className="text-sm text-7 dark:text-5">{zone}</p>
      <p className="text-sm text-7 dark:text-5">{country}</p>
    </div>
  );
}
