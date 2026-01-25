// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Login from "./components/Login"
// import Body from "./components/Body"
// import Profile from "./components/Profile"
// import { Provider } from "react-redux"
// import store from "./utils/appStore"
// import Feed from "./components/Feed"
// import Connections from "./components/Connections"
// import Requests from "./components/Requests"
// import Chat from "./components/Chat"
// import Premium from "./components/Premium"


// function App() {

//   return (
//     <Provider store={store}>
//     <BrowserRouter basename="/">
//     <Routes>
//       <Route path="/" element={<Body />}>
//       <Route index element={<Login/>}/>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Feed/>}/>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/connections" element={<Connections />} />
//         <Route path="/requests" element={<Requests />} />
//         <Route path="/chat/:targetUserId" element={<Chat />}/>
//         <Route path="/premium" element={<Premium />}/>
//       </Route>
      
//     </Routes>
//     </BrowserRouter>
//     </Provider>
//   )
// }

// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./utils/appStore";

import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Chat from "./components/Chat";
import Premium from "./components/Premium";

// 🔹 Separate Routes so we can access Redux
const AppRoutes = () => {
  const user = useSelector((store) => store.user);

  return (
    <Routes>
      <Route path="/" element={<Body />}>
        {/* ✅ CONDITIONAL LANDING PAGE */}
        <Route index element={user ? <Feed /> : <Login />} />

        {/* PUBLIC */}
        <Route path="login" element={<Login />} />

        {/* PRIVATE */}
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
        <Route path="connections" element={<Connections />} />
        <Route path="requests" element={<Requests />} />
        <Route path="chat/:targetUserId" element={<Chat />} />
        <Route path="premium" element={<Premium />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
