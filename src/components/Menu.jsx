import { NavLink } from "react-router-dom"

export default function Menu() {
    return (
        <>
            <div>
                <ul>
                    <NavLink to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/Explore'>
                        <li>Explore</li>
                    </NavLink>
                    <NavLink to='/Notifications'>
                        <li>Notifications</li>
                    </NavLink>
                    <NavLink to='/Messages'>
                        <li>Messages</li>
                    </NavLink>
                    <NavLink to='/Bookmarks'>
                        <li>Bookmarks</li>
                    </NavLink>
                    <NavLink to='/Lists'>
                        <li>Lists</li>
                    </NavLink>
                    <NavLink to='/Profile'>
                        <li>Profile</li>
                    </NavLink>
                    <NavLink to='/More'>
                        <li>More</li>
                    </NavLink>
                </ul>
            </div>

        </>
    )
}