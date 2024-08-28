import { FaArrowRightLong } from "react-icons/fa6";

const FirstPage = () => {
  return (
    <div className="page1">
    <div className="text-white py-28">
      <div className="flex justify-around items-center w-full relative">
        <h2 className="text-7xl absolute font-normal left-16 top-52">
          Comedians
        </h2>
        <div className="w-[85vh] h-[85vh] -mb-32 -mt-12 rounded-full ml-44 overflow-hidden border-8 border-orange-500">
          <img
            className="object-cover h-full w-full "
            src="https://wallpapercave.com/wp/wp8181770.jpg"
            alt="img 404"
          />
        </div>
        <div className="text-6xl mr-28">
          <h2 className="leading-[4rem]">
            <span className="text-zinc-600">Choose</span> <br></br>
            <span className="text-zinc-600">from </span> 100+ <br></br>
            <span> Categories</span>
          </h2>
        <div className="mt-14 flex items-center">
        <h4 className="bg-gradient-to-r from-[#c36e92] via-[#e78ea4] to-orange-600 bg-clip-text text-transparent text-2xl font-semibold">
            Explore all categories 
          </h4>
          <FaArrowRightLong className="ml-2 text-2xl bg-gradient-to-r from-[#c36e92] via-[#e78ea4] to-orange-600 bg-clip-text  text-orange-400 mt-1.5"/>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FirstPage