import { NavLink } from "react-router-dom"

export default function Menu() {
    return (
        <>
            <div>
                <ul className="grid grid-rows-8 grid-flow-col gap-4">
                    <NavLink to='/'>
                        <div className="hover:bg-slate-500 w-24 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Home-Fill.svg" alt="" />
                            <li>Home</li>
                        </div>

                    </NavLink>
                    <NavLink to='/Explore'>
                        <div className="hover:bg-slate-500 w-28 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Explore.svg" alt="" />
                            <li>Explore</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Notifications'>
                        <div className="hover:bg-slate-500 w-38 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Notifications.svg" alt="" />
                            <li>Notifications</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Messages'>
                        <div className="hover:bg-slate-500 w-32 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Messages.svg" alt="" />
                            <li>Messages</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Bookmarks'>
                        <div className="hover:bg-slate-500 w-32 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Bookmarks.svg" alt="" />
                            <li>Bookmarks</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Lists'>
                        <div className="hover:bg-slate-500 w-24 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Lists.svg" alt="" />
                            <li>Lists</li>
                        </div>
                    </NavLink>
                    <NavLink to='/Profile'>
                        <div className="hover:bg-slate-500 w-24 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/Profile.svg" alt="" />
                            <li>Profile</li>
                        </div>
                    </NavLink>
                    <NavLink to='/More'>
                        <div className="hover:bg-slate-500 w-24 rounded-full flex gap-4">
                            <img src="src/ImagesMenu/More.svg" alt="" />
                            <li>More</li>
                        </div>
                    </NavLink>
                </ul>
            </div>

        </>
    )
}