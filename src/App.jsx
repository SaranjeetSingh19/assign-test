import "./App.css";
import FifthPage from "./page/FifthPage";

import FirstPage from "./page/FirstPage";
import FourthPage from "./page/FourthPage";
import SecondPage from "./page/SecondPage";
import ThirdPage from "./page/ThirdPage";

import { FaArrowRightLong } from "react-icons/fa6";

const App = () => {
  return (
    <div className="main bg-[#080810] h-[100vh] w-full ">
      <FirstPage />
      <div className="bg-[#080810] h-40"></div>
      <SecondPage />
      <div className="bg-[#080810] h-36"></div>
      <ThirdPage />
      <div className="bg-[#080810] h-40"></div>
      <FourthPage />
      <div className="bg-[#080810] h-40"></div>
      <FifthPage />
      <div className="bg-[#080810] h-36"></div>

      <div className="bg-[#080810] h-full">
        <div className="1 ">

        <div className="absolute bg-gradient-to-b w-96 h-[80vh] rounded-l-full from-[#542541] to-[#411b32] z-0 right-[0%] "></div> 
          <div className="relative flex justify-center items-center">
            <div className="absolute bg-gradient-to-b w-96 h-[80vh] rounded-r-full from-[#1c0f18] to-[#411b32] z-0 -left-40"></div>
            <div className="relative z-10 mx-auto w-[77vw] flex justify-center items-center bg-[#0b0b13] border border-slate-500 rounded-l-full rounded-r-full h-[60vh]">
              <div className="text-center flex flex-col items-center">
                <h1 className="text-white text-7xl tracking-wide">
                  20+ Talented Folks
                </h1>
                <p className="text-white w-[37vw] my-8 text-xl">
                  From passion-driven dedication to impactful contribution,{" "}
                  <br />
                  we do it all here. We are growing and will be excited to hear{" "}
                  <br />
                  from you!
                </p>
                <button className="bg-gradient-to-r from-[#c6483c] to-[#ca2e5d] rounded-full text-white px-8 py-2 text-xl flex items-center">
                  Join our team <FaArrowRightLong className="ml-2 mt-[6px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
