import logoIcon from "../assets/logo.svg";
import avatarImg from "../assets/image-avatar.jpg";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";

export default function SideBar() {
  let isDarkMode = document.documentElement.classList.contains("dark");
  return (
    <aside className="fixed top-0 left-0 h-screen w-[103px] pb-6 flex flex-col justify-between rounded-tr-[20px] rounded-br-[20px] bg-[#373B53]">
      <div className="w-[103px] h-[103px] bg-[url('./assets/logo-bg.svg')] flex justify-center items-center">
        <img height={37} width={40} src={logoIcon} alt="logo"></img>
      </div>

      <div className="flex flex-col gap-6 justify-around items-center">
        <button>{isDarkMode ? <IconSun></IconSun> : <IconMoon></IconMoon>}</button>
        <hr className="w-full text-[#494E6E]"></hr>
        <img height={40} width={40} className="rounded-full" src={avatarImg} alt="avatar"></img>
      </div>
    </aside>
  );
}
