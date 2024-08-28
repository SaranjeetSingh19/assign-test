import "./App.css";
import FifthPage from "./page/FifthPage";

import FirstPage from "./page/FirstPage";
import FourthPage from "./page/FourthPage";
import SecondPage from "./page/SecondPage";
import SixthPage from "./page/SixthPage";
import ThirdPage from "./page/ThirdPage";


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
      <div className="bg-[#080810] h-56"></div>
      <FifthPage />
      <div className="bg-[#080810] h-36"></div>
      <SixthPage />
    </div>
  );
};

export default App;
