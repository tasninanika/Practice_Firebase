import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
