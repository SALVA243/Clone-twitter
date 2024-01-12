export default function Publication() {

    return (
        <>

            <div className='flex flex-row justify-start justify-items-start border-solid border border-yellow-500 h-36'>
                <img className="w-1/12 h-16  border-solid border border-red-500 " src="src/images/Profile-Photo2.svg" alt="User Image" />
                <div className="ms-1 border-solid border border-blue-500 w-full p-0">
                    <textarea className="bg-transparent  border-solid border border-yellow-500 h-4/5 w-full m-0 resize-none" name="" id="" cols="30" rows="2" placeholder="what's happing ?"></textarea>

                    <div className='flex justify-between border-solid border border-red-500 px-3'>
                        <div className='flex justify-between border-solid border border-yellow-500 w-36'>
                            <a href=""><img src="src/images/Groupimg.svg" alt="" /></a> <a href=""><img src="src/images/Groupgif.svg" alt="" /></a> <a href=""><img src="src/images/Vector2.svg" alt="" /></a> <a href=""><img src="src/images/smile.svg" alt="icon smile" /></a><a href=""><img src="src/images/calendrier.svg" alt="" /></a>
                        </div>
                        <span className="bg-sky-500/75 hover:bg-cyan-600 rounded-full w-20 text-center">tweet</span>
                    </div>
                </div>
            </div>
        </>
    )
}