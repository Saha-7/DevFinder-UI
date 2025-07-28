// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addRequests, removeRequest } from "../utils/requestSlice";
// import { useEffect, useState } from "react";

// const Requests = () => {
//   const requests = useSelector((store) => store.requests);
//   const dispatch = useDispatch();

//   const reviewRequest = async (status, _id) => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/request/review/" + status + "/" + _id,
//         {},
//         { withCredentials: true }
//       );
//       console.log(res);
//       dispatch(removeRequest(_id));
//     } catch (err) {
//       console.log(err);

//     }
//   };

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/requests/received", {
//         withCredentials: true,
//       });

//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//       console.log(err);

//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   if (!requests) return;

//   if (requests.length === 0)
//     return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

//   return (
//     <div className="text-center my-10">
//       <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

//       {requests.map((request) => {
//         const { _id, firstName, lastName, photoUrl, age, gender, about } =
//           request.fromUserId;

//         return (
//           <div
//             key={_id}
//             className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3  mx-auto"
//           >
//             <div>
//               <img
//                 alt="photo"
//                 className="w-20 h-20 rounded-full"
//                 src={photoUrl}
//               />
//             </div>
//             <div className="text-left mx-4 ">
//               <h2 className="font-bold text-xl">
//                 {firstName + " " + lastName}
//               </h2>
//               {age && gender && <p>{age + ", " + gender}</p>}
//               <p>{about}</p>
//             </div>
//             <div>
//               <button
//                 className="btn btn-primary mx-2"
//                 onClick={() => reviewRequest("rejected", request._id)}
//               >
//                 Reject
//               </button>
//               <button
//                 className="btn btn-secondary mx-2"
//                 onClick={() => reviewRequest("accepted", request._id)}
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Requests;

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      console.log(res);
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex items-start gap-4 m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto min-h-[120px]"
          >
            {/* Profile Image - Fixed width */}
            <div className="flex-shrink-0">
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>

            {/* Content Area - Flexible width */}
            <div className="flex-1 text-left min-w-0">
              <h2 className="font-bold text-xl mb-1">
                {firstName + " " + lastName}
              </h2>
              {age && gender && (
                <p className="text-sm text-gray-400 mb-2">{age + ", " + gender}</p>
              )}
              {/* {age && gender && (
                <p className="text-sm text-gray-400 mb-2">
                  <span>Age: {age}  </span>
                  <span>Gender: {gender}</span>
                </p>
              )} */}
              {/* ✅ FIXED: Proper text wrapping and line clamping */}
              <p className="text-sm leading-relaxed break-words line-clamp-3 overflow-hidden">
                {about}
              </p>
            </div>

            {/* Buttons - Fixed width */}
            <div className="flex-shrink-0 flex flex-col gap-2">
              <button
                className="btn btn-primary btn-sm w-20"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary btn-sm w-20"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
