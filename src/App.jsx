export default function App() {
  return (
    <main className="bg-11 w-screen h-screen pt-[78px]">
      <div className="w-[100px] mx-auto flex flex-col gap-[70px] bg-1">
        <header className="w-full flex justify-between">
          <div className="flex flex-col gap-[6px]">
            <h1 className="text-3xl text-8 tracking-tighter">Invoices</h1>
            <p className="text-sm text-6">There are 7 total invoices</p>
          </div>
          <div>
            <button>Filter by status</button>
            <button>New Invoice</button>
          </div>
        </header>
        <ul>
          <li></li>
        </ul>
      </div>
    </main>
  );
}
