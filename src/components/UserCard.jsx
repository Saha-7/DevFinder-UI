import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  const { firstName, lastName, gender, age, about, skills, photoUrl } = user;
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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
