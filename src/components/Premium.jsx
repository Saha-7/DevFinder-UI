import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Premium = () => {

  const handleBuyClick = async(type)=>{
    const order = await axios.post(BASE_URL+"/payment/create", {
      membershipType: type
    },{withCredentials: true})

    const {keyId, amount, currency, notes, orderId} = order.data
  
  //Open Razorpay Dialog Box

  const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: 'DevFinder',
        description: 'Connect to other Developers',
        order_id: orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.firstname + " " + notes.lastname,
          email: notes.email,
          contact: '8372833221'
        },
        theme: {
          color: '#004080'
        },
      };

  const rzp = new window.Razorpay(options);
      rzp.open();

  }
  return (
    <div className="m-10 flex justify-center items-center h-96">
      <div className="flex space-x-7 w-2/3 flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-72 w-1/2 grow place-items-center transition-transform duration-300 hover:-translate-y-2">
          <h1 className="font-extrabold text-2xl text-amber-100">Platinum</h1>
          <ul>
            <li> - Unlimited chat per day</li>
            <li> - 50 connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 3 months validity</li>
          </ul>
          <button onClick={()=>handleBuyClick("platinum")} className="bg-amber-50 text-black m-2 p-2 px-4 rounded-lg cursor-pointer">Buy</button>
        </div>
        <div className="card bg-base-300 rounded-box grid h-72 w-1/2 grow place-items-center transition-transform duration-300 hover:-translate-y-2">
          <h1 className="font-extrabold text-2xl text-amber-500">Gold</h1>
          <ul>
            <li> - Unlimited chat per day</li>
            <li> - 100 connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 6 months validity</li>
          </ul>
          <button onClick={()=>handleBuyClick("gold")} className="bg-yellow-500 text-black m-2 p-2 px-4 rounded-lg cursor-pointer">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Premium
