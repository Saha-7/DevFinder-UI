
const Premium = () => {
  return (
    <div className="m-10 flex justify-center items-center h-96">
      <div className="flex space-x-7 w-2/3 flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-72 grow place-items-center transition-transform duration-300 hover:-translate-y-2">
          <h1 className="font-extrabold text-2xl text-amber-100">Platinum</h1>
          <ul>
            <li> - Unlimited chat per day</li>
            <li> - 50 connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 3 months validity</li>
          </ul>
          <button className="bg-slate-400 text-black m-2 p-2 px-4 rounded-lg cursor-pointer">Buy</button>
        </div>
        <div className="card bg-base-300 rounded-box grid h-72 grow place-items-center transition-transform duration-300 hover:-translate-y-2">
          <h1 className="font-extrabold text-2xl text-amber-500">Gold</h1>
          <ul>
            <li> - Unlimited chat per day</li>
            <li> - 100 connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 6 months validity</li>
          </ul>
          <button className="bg-yellow-500 text-black m-2 p-2 px-4 rounded-lg cursor-pointer">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
