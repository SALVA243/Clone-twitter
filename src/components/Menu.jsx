import { NavLink } from "react-router-dom"

export default function Menu() {
    return (
        <>
            <div>
                <ul>
                    <NavLink to='/'>
                        <div className="hover:bg-gray-200 w-28">
                            <img src="" alt="" />
                            <li>Home</li>
                        </div>

                    </NavLink>
                    <NavLink to='/Explore'>
                        <div className="hover:bg-gray-200 w-28">
                            <img src="" alt="" />
                            <li>Explore</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Notifications'>
                        <div className="hover:bg-gray-200 w-28">
                            <img src="" alt="" />
                            <li>Notifications</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Messages'>
                        <div className="hover:bg-gray-200 w-28 rounded-full">
                            <img src="" alt="" />
                            <li>Messages</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Bookmarks'>
                        <div className="hover:bg-gray-200 w-28 rounded-full">
                            <img src="" alt="" />
                            <li>Bookmarks</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Lists'>
                        <div className="hover:bg-gray-200 w-28 rounded-full">
                            <img src="" alt="" />
                            <li>Lists</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Profile'>
                        <div className="hover:bg-gray-200 w-28 rounded-full">
                            <img src="" alt="" />
                            <li>Profile</li>
                        </div>
                    </NavLink>
                    <NavLink to='/More'>
                        <div className="hover:bg-gray-200 w-28 rounded-full">
                            <img src="" alt="" />
                            <li>More</li>
                        </div>
                    </NavLink>
                </ul>
            </div>

        </>
    )
}