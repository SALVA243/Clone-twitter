import Profile from "./Profiletwitt"

export default function Publication() {

    return (
        <>

            <div className='flex justify-start justify-items-start border-solid border border-gray-300 h-36 px-2'>
                <Profile stylerdiv='h-16 m-0' stylerImage='w-full size-16' src="src/images/Profile-Photo2.svg" />
                <div className="ms-1 w-full mb-3">
                    <input type="text" className="bg-transparent h-4/5 w-full m-0 resize-none" name="" id="" cols="30" rows="2" placeholder="what's happing ?" />

                    <div className='flex justify-between h-10 mb-18'>
                        <div className='flex justify-between w-36'>
                            <a href=""><img src="src/images/Groupimg.svg" alt="" /></a> <a href=""><img src="src/images/Groupgif.svg" alt="" /></a> <a href=""><img src="src/images/Vector2.svg" alt="" /></a> <a href=""><img src="src/images/smile.svg" alt="icon smile" /></a><a href=""><img src="src/images/calendrier.svg" alt="" /></a>
                        </div>
                        <span className="py-3 pl-1 rounded-full bg-blue-400 h-10 w-32 hover:bg-blue-700 text-center mb-10">tweet</span>
                    </div>
                </div>
            </div>
        </>
    )
}