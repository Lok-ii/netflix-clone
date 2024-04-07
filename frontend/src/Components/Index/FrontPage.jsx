import { Link, Outlet } from "react-router-dom";
import background from "../../assets/images/background.jpg";
import logo from "../../assets/svgs/Logo.svg";
import translate from "../../assets/svgs/translate.svg";
import { FaCaretDown } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const FrontPage = () => {
  return (
    <div
      className="w-full h-[100vh] bg-no-repeat flex flex-col items-center"
      style={{
        backgroundSize: "125%",
        backgroundImage: `linear-gradient(black, rgba(0, 0, 0, 0.2), black), url(${background})`,
        backgroundPosition: "center 75% ",
      }}
    >
      <div className="w-[80%] h-[5rem] px-4 flex justify-between items-center">
        <div className="w-[9rem]">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-8">
          <div
            className="relative text-white flex items-center gap-2 bg-transparent px-4 py-[0.1rem] rounded-sm cursor-pointer active:border-[1px] border-white"
            style={{ boxShadow: "0 0 1px 0px white" }}
          >
            <img src={translate} alt="" />
            <p>English</p>
            <FaCaretDown />
            <div className="flex flex-col items-center absolute top-[120%] left-0 w-full rounded-md bg-white text-black ">
              <p className="hover:bg-[#1967D2] hover:text-white w-full text-center rounded-t-md">
                English
              </p>
              <p className="hover:bg-[#1967D2] hover:text-white w-full text-center rounded-b-md">
                हिन्दी
              </p>
            </div>
          </div>
          <div>
            <Link
              to={"/signin"}
              className="bg-primaryRed rounded-md py-1 px-4 text-white font-semibold active:scale-[0.99]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-white flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default FrontPage;
