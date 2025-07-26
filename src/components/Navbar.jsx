import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🧑‍💻 DevFinder
        </Link>
      </div>
      {user && (
        <div className="flex  gap-2">
          <div className="form-control pt-1.5">
            Welcome, <b>{user.firstName}</b>
          </div>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>

              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
