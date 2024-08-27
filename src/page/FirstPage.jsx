
const FirstPage = () => {
  return (
    <div className="page1">
    <div className="text-white py-28">
      <div className="flex justify-around items-center w-full relative">
        <h2 className="text-7xl absolute font-normal left-32 top-52">
          Comedians
        </h2>
        <div className="w-[85vh] h-[85vh] -mb-32 -mt-12 rounded-full ml-36 overflow-hidden border-8 border-orange-500">
          <img
            className="object-cover h-full w-full "
            src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnl8ZW58MHx8MHx8fDA%3D"
            alt="img 404"
          />
        </div>
        <div className="text-6xl">
          <h2 className="leading-[4rem]">
            <span className="text-zinc-600">Choose</span> <br></br>
            <span className="text-zinc-600">from </span> 100+ <br></br>
            <span> Categories</span>
          </h2>
          <h4 className="mt-14 text-orange-300 text-2xl">
            Explore all categories
          </h4>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FirstPage