import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Explore from "../pages/Explore"
import Notifications from "../pages/Notifications"
import Messages from "../pages/Messages"
import Bookmarks from "../pages/Bookmarks"
import Lists from "../pages/Lists"
import Profile from "../pages/Profile"
import More from "../pages/More"

export default function Sidebar() {
    return (
        <>
            <div className='col-span-3 bg-red-500'>
                <div className="fixed">
                    <img src="src/images/Icon.svg" alt="logo twitter" />
                </div>
                <nav>
                    <BrowserRouter>
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
                    </BrowserRouter>
                </nav>
            </div>
        </>
    )
}