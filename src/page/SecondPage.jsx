
const SecondPage = () => {
  return (
    <div className="page2 bg-[#080810]">
    <div className="bg-[#080810] h-[100vh] w-full px-36 bg-gradient-to-b from-[#0b0b17] to-[#080812] border-4 border-b-0 border-[#1f1e30] rounded-tl-full rounded-tr-full">  
      <div className="curve-lines h-full w-full flex flex-col  items-center mt-16">
        <div className="text-xl text-center bg-[#111118] rounded-full px-4 py-2 shadow-lg shadow-black ">
          <button className="bg-[#e3e5fe] text-black rounded-full px-8 py-2 mr-8">
            Photos
          </button>
          <button className="bg-[#1b1b25] text-white rounded-full px-8 py-2">
            Videos
          </button>
        </div>
        <div className="cards text-2xl text-white flex flex-wrap gap-8 justify-center w-full px-20  mt-16 
        ">
          {/* <div className="multiple-cards"> */}
            <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-l-full rounded-t-full">
            <img
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW9ufGVufDB8fDB8fHww"
              alt="Image"
              className="w-full h-full object-cover  clip-custom-shape"
            />
          </div>
          <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-3xl">
            <img
             src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
            <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-l-full rounded-t-full">
            <img
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW9ufGVufDB8fDB8fHww"
              alt="Image"
              className="w-full h-full object-cover  clip-custom-shape"
            />
          </div>
          <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-3xl">
            <img
             src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
            <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-l-full rounded-t-full">
            <img
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW9ufGVufDB8fDB8fHww"
              alt="Image"
              className="w-full h-full object-cover  clip-custom-shape"
            />
          </div>
          <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-3xl">
            <img
             src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
            <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-l-full rounded-t-full">
            <img
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW9ufGVufDB8fDB8fHww"
              alt="Image"
              className="w-full h-full object-cover  clip-custom-shape"
            />
          </div>
          <div className="relative w-48 h-48 border-4 border-gray-800 overflow-hidden rounded-3xl">
            <img
             src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* </div> */}

          
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecondPage