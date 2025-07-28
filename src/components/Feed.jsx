import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(feed)
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res?.data?.data));
     // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    getFeed()
  },[])

  if(!feed) return

  if (feed.length <=0) return <h1 className="flex justify-center text-xl my-10">No more users found!!</h1>

  return (
    feed && (
      <div className="flex justify-center mt-5 mb-5">
      <UserCard user={feed[0]}/>
    </div>
    )
  )
};

export default Feed;
