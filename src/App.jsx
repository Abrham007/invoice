import Main from "./components/Main";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="w-screen h-screen bg-11 dark:bg-12  py-[108px] md:py-[142px] lg:py-[78px]">
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}
