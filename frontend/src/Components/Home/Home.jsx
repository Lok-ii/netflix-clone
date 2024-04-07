import { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { authenticateUser } from "../../utils/userApi";
import { setIsAuthenticated, setUser } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";
import useMedia from "../../utils/useMedia";

const Home = () => {
  useMedia();
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const data = await authenticateUser();
      if (data.success === true) {
        dispatch(setUser(data.user));
        dispatch(setIsAuthenticated(true));
      } else {
        dispatch(setUser(null));
        dispatch(setIsAuthenticated(false));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
