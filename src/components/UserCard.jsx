import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      console.log(res)
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="card bg-black w-80 shadow-lg ">
      <figure>
        <img
          className="w-full object-cover rounded-lg"
          src={photoUrl}
          alt="Profile Picture"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}{" "}
        </h2>
        {age && gender && (
          <p className="flex gap-4">
            <span>Age: {age}</span>
            <span>Gender: {gender}</span>
          </p>
        )}
        <p>{about}</p>
        <div className="card-actions flex justify-center mt-2">
          <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored", _id)}>Ignore</button>
          <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested", _id)}>Follow</button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
