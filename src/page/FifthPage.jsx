import { CiLocationArrow1 } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";

const FifthPage = () => {
  return (
    <div className="five bg-[#080810] h-[100vh] w-full">
    <div className="flex flex-col items-center">
      <h1 className="text-white text-5xl leading-tight tracking-wide  ">
        Recent shows made star- <br /> studded via StarClinch
      </h1>
      <div className="text-white">
        <div className="imgDiv flex items-center gap-8 mt-20 ">
          <h1 className="text-[#bdbfc8] cursor-pointer  border border-slate-400 text-3xl bg-gradient-to-b from-[#27282f] to-[#07080e] rounded-full p-4 text-center">
            <CiLocationArrow1 className="rotate-[230deg] " />
          </h1>
          <img
            src="https://media.gettyimages.com/id/85231056/photo/unspecified-photo-of-eminem.jpg?s=612x612&w=0&k=20&c=P9OtmbOoKQihhczb-Y_ebvPcsE8TpJ_GWobnQFCPg68="
            alt="404 img"
            className="object-cover w-[30vw] h-[60vh] rounded-t-full "
          />
          <div className="flex flex-col">
          <h1 className="text-5xl">
            Eminem{" "}
            <span className="text-zinc-400">
              for an <br /> event hosted
            </span>{" "}
            at <br /> Pune for <br /> Meesho.{" "} <br /> 
          </h1>
          <div className="flex items-center gap-2 mt-8 text-lg">

          <MdCalendarMonth />
            <span className="text-zinc-400" >  27 August 2024</span>
          </div>
          </div>
           
          <h1 className="text-[#bdbfc8] cursor-pointer border border-white text-3xl bg-gradient-to-b from-[#27282f] to-[#07080e] rounded-full p-4 text-center">
            <CiLocationArrow1 className="rotate-[40deg]" />
          </h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FifthPage