
import Menu from '../components/Menu';
export default function Sidebar() {
    return (
        <> <div className='col-span-3' >
            <div className=' fixed'>
                <div className='py-3'>
                    <img src="src/images/Icon.svg" alt="logo twitter" />
                </div>
                <Menu />
                <button className='py-2 mt-10 ml-10 rounded-full bg-blue-400 w-32 hover:bg-blue-700'>Tweet</button>
            </div>
        </div>
        </>
    )
}