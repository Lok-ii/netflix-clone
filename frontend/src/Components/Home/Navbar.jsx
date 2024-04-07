import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import logo from "../../assets/svgs/Logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 w-full px-16 z-[1000] bg-dimNavbar backdrop-blur-[0.1rem] fixed top-0">
      <div className="flex items-center gap-8 justify-between">
        <div className="w-20">
          <img src={logo} className="object-cover" alt="" />
        </div>
        <div className="flex items-center gap-4 text-white font-semibold">
          <Link to={"/explore/movies"}>Shows</Link>
          <Link to={"/explore/tv"}>Movies</Link>
        </div>
      </div>
      <div className="flex items-center gap-3 text-white">
        <LuSearch className="text-xl font-bold cursor-pointer" />
        <IoMdNotificationsOutline className="text-xl font-bold cursor-pointer" />
        <div className="w-6 h-6 rounded-[50%] bg-blackLayer cursor-pointer">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
