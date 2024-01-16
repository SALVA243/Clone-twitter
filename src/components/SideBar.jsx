import Menu from "./Menu"

export default function Sidebar() {
    return (
        <>
            <div className='col-span-3'>
                <div className="fixed">
                    <img src="src/images/Icon.svg" alt="logo twitter" />
                </div>
                {/* <nav>
                    <Menu src='src/images/Home-Fill.svg' element='HOME' />
                </nav> */}
            </div>
        </>
    )
}