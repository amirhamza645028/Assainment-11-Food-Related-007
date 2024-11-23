import { Outlet, useLocation } from "react-router-dom";
import Navber from "../AllComponents/Navber";
import Footer from "../AllComponents/Footer";

const Root = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("auth") ||
    location.pathname.includes("auth#signup");
  return (
    <div className="max-w-screen-xl mx-auto">
      {isLogin || <Navber></Navber>}

      <Outlet />

      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default Root;
