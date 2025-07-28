import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Body from "./components/Body"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import store from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"


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
        <Route path="/requests" element={<Profile />} />

      </Route>
      
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
