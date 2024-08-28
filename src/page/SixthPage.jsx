import { FaArrowRightLong } from "react-icons/fa6";

const SixthPage = () => {
  const btnArr = [
    "Focused",
    "Collaborative",
    "United",
    "Vibrant",
    "Motivated",
    "Dynamic",
  ];
  const rotationValues = [30, 20, 40, 20];

  return (
    <div className="six bg-[#080810] h-full">
      <div className="1">
        <div className="absolute bg-gradient-to-b w-96 h-[80vh] rounded-l-full from-[#542541] to-[#411b32] z-0 right-[0%] "></div>
        <div className="relative flex justify-center items-center">
          <div className="absolute bg-gradient-to-b w-96 h-[80vh] rounded-r-full from-[#1c0f18] to-[#411b32] z-0 -left-40"></div>
          <div className="relative z-10 mx-auto w-[77vw] flex justify-center items-center bg-[#0b0b13] border border-slate-500 rounded-l-full rounded-r-full h-[60vh]">
            <div className="text-center flex flex-col items-center relative">
              <button
                className="text-white
              -left-16 top-10 -rotate-12
              absolute bg-gradient-to-l from-[#414248] to-[#17141b] rounded-3xl text-xl border border-slate-400 px-7 py-2"
              >
                Fun
              </button>

              <button
                className="text-white
              -right-16 -top-2 rotate-[8deg]
              absolute bg-gradient-to-l from-[#414248] to-[#17141b] rounded-3xl text-xl border border-slate-400 px-7 py-2"
              >
               Inclusive
              </button>
              <h1 className="text-white text-7xl tracking-wide">
                20+ Talented Folks
              </h1>
              <p className="text-white w-[37vw] my-8 text-xl">
                From passion-driven dedication to impactful contribution, <br />
                we do it all here. We are growing and will be excited to hear{" "}
                <br />
                from you!
              </p>
              <button className="bg-gradient-to-r from-[#c6483c] to-[#ca2e5d] rounded-full text-white px-8 py-2 text-xl flex items-center">
                Join our team <FaArrowRightLong className="ml-2 mt-[6px]" />
              </button>
              <div className="flex items-end  absolute -bottom-20 -space-x-12 h-20 overflow-hidden">
                {btnArr.map((item, index) => {
                  const randomRotation =
                    rotationValues[
                      Math.floor(Math.random() * rotationValues.length)
                    ];

                  return (
                    <button
                      key={index}
                      className={`text-white bg-zinc-800 border border-slate-600 opacity-55 px-8 py-1 text-lg rounded-full rotate-[${randomRotation}deg]`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
