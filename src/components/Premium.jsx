
const Premium = () => {
  return (
    <div className="m-10 ">
      <div className="flex space-x-7 w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-56 grow place-items-center">
          <h1 className="font-bold">Silver</h1>
          <ul>
            <li> - Unlimited chat per day</li>
            <li> - 50 connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 3 months validity</li>
          </ul>
          <button className="bg-slate-400 text-black m-2 p-2 rounded-lg">Select</button>
        </div>
        <div className="card bg-base-300 rounded-box grid h-56 grow place-items-center">
          <h1 className="font-bold">Gold</h1>
          <ul>
            <li> - Unlimited chat per day</li>
            <li> - 100 connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 6 months validity</li>
          </ul>
          <button className="bg-slate-400 text-black m-2 p-2 rounded-lg">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
