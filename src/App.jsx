import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Body from "./components/Body"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import store from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import Chat from "./components/Chat"
import Premium from "./components/Premium"


function App() {

  return (
    <Provider store={store}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Feed/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/chat/:targetUserId" element={<Chat />}/>
        <Route path="/premium" element={<Premium />}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
