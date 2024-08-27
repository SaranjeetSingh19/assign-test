import "./App.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
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
      <div className="fourth bg-[#080810] min-h-[100vh] px-48">
        <h2 className="text-white text-5xl text-center">
          Meet Our Starclinch Squads
        </h2>

        <div className="bg-gradient-to-b from-[#1e1e2a] to-[#080810] h-[70vh] w-full mt-36 border-2 border-[#0606bf] rounded-t-full border-b-0 ">
          <div className="flex justify-center -mt-[5.5vw]">
            <button className="bg-white h-8 w-8 rounded-full px-2 my-auto"><FaArrowLeft /></button>

            <img
              src="https://images.unsplash.com/photo-1713450603775-9b4466eb466c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZyaWVuZHMlMjBhdCUyMHBhcnR5fGVufDB8fDB8fHww"
              alt="img 404"
              className="h-48 w-56 object-cover  rounded-3xl mx-8"
            />
            <button className="bg-white h-8 w-8 rounded-full px-2 my-auto"><FaArrowRight /></button>
          </div>
          <div className="flex justify-evenly gap-[4vw] mt-14">
          <img
              src="https://images.unsplash.com/photo-1648090319890-62e6ce986438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZyaWVuZHMlMjBhdCUyMHBhcnR5fGVufDB8fDB8fHww"
              alt="img 404"
              className="h-48 w-48 object-cover  rounded-full"
            />
         <div className="w-[40vw] text-center mt-12">
          <button className="px-6 py-2 rounded-full text-white text-xl bg-gradient-to-b from-[#235421] to-[#0a0b11] ">6 Members</button>
          <h1 className="text-white text-4xl my-6">Tech Titans</h1>
          <h4 className="text-zinc-500 text-xl ">The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination</h4>
          <div className="">
          <h3 className="text-green-500 text-xl mt-6">Our design team is growing. Apply now. </h3>
          <BiSolidRightArrow className="text-green-500 text-2xl" />
          </div>
          
         </div>
            <img
              src="https://images.unsplash.com/photo-1687887627177-d8fa77206852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxmcmllbmRzJTIwYXQlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
              alt="img 404"
              className="h-48 w-48 object-cover  rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
