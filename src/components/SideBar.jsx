
import Menu from '../components/Menu';
export default function Sidebar() {
    return (
        <>
            <div className='col-span-3 bg-red-500'>
                <div className="fixed">
                    <img src="src/images/Icon.svg" alt="logo twitter" />
                </div>
                <Menu />
            </div>
        </>
    )
}