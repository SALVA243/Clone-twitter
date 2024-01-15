import Profile from "./Profile"

export default function Publication() {

    return (
        <>

            <div className='flex flex-row justify-start justify-items-start border-solid border border-gray-300 h-36 px-2'>
                <Profile stylerdiv='h-16 m-0' stylerImage='w-full size-16' src="src/images/Profile-Photo2.svg" />
                <div className="ms-1 w-full mb-3">
                    <textarea className="bg-transparent h-4/5 w-full m-0 resize-none" name="" id="" cols="30" rows="2" placeholder="what's happing ?"></textarea>

                    <div className='flex justify-between px-3'>
                        <div className='flex justify-between w-36'>
                            <a href=""><img src="src/images/Groupimg.svg" alt="" /></a> <a href=""><img src="src/images/Groupgif.svg" alt="" /></a> <a href=""><img src="src/images/Vector2.svg" alt="" /></a> <a href=""><img src="src/images/smile.svg" alt="icon smile" /></a><a href=""><img src="src/images/calendrier.svg" alt="" /></a>
                        </div>
                        <span className="bg-sky-500/75 hover:bg-cyan-600 rounded-full w-20 text-center">tweet</span>
                    </div>
                </div>
            </div>
        </>
    )
}