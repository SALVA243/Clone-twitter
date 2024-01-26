// import './App.css'
import SideBar from "./components/SideBar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Notifications from "./pages/Notifications"
import Messages from "./pages/Messages"
import Bookmarks from "./pages/Bookmarks"
import Lists from "./pages/Lists"
import Profile from "./pages/Profile"
import More from "./pages/More"
import Trends from "./components/Trends"

function App() {

  return (
    <>
      <div className='bg-transparent grid grid-cols-12 w-9/12 mx-auto gap-4'>
        <SideBar />
        <div className='col-span-6'>
          <nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/Notifications' element={<Notifications />} />
              <Route path='/Messages' element={<Messages />} />
              <Route path='/Bookmarks' element={<Bookmarks />} />
              <Route path='/Lists' element={<Lists />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/More' element={<More />} />
            </Routes>
          </nav>
        </div>
        <Trends />
      </div>
    </>
  )
}

export default App
