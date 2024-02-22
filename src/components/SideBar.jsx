import logoIcon from "../assets/logo.svg";
import avatarImg from "../assets/image-avatar.jpg";
import IconMoon from "./UI/Icons/IconMoon";
import IconSun from "./UI/Icons/IconSun";
import useTheme from "../theme/useTheme";

export default function SideBar() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  let isDarkMode = theme === "dark" ? true : false;
  return (
    <aside className="lg:h-screen lg:w-[103px] lg:bg-white lg:dark:bg-12">
      <div className="fixed top-0 left-0 z-50000 w-screen h-20 lg:h-screen lg:w-[103px] pr-6 lg:pb-6 lg:pr-0 flex lg:flex-col justify-between lg:rounded-tr-[20px] lg:rounded-br-[20px] bg-[#373B53]">
        <div className="w-20 lg:w-[103px] h-20 lg:h-[103px] bg-[url('./assets/logo-bg.svg')] bg-contain flex justify-center items-center">
          <img height={37} width={40} src={logoIcon} alt="logo"></img>
        </div>

        <div className="flex lg:flex-col gap-6 justify-around items-center">
          <button onClick={toggleTheme}>
            {isDarkMode ? <IconSun></IconSun> : <IconMoon></IconMoon>}
          </button>
          <hr className="lg:w-full h-full w-[1px] bg-[#494E6E] text-[#494E6E]"></hr>
          <img
            height={40}
            width={40}
            className="rounded-full"
            src={avatarImg}
            alt="avatar"
          ></img>
        </div>
      </div>
    </aside>
  );
}
