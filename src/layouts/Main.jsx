import { Outlet, useLoaderData } from "react-router-dom";

//component imports
import Nav from "../components/Nav";

//assets imports
import wave from "../assets/wave.svg";
//helper functions
import { fetchData } from "../helpers";

//loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
