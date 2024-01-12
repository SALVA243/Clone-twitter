export default function Publication() {

    return (
        <>

            <div className='flex flex-row justify-start justify-items-start border-solid border-2 border-yellow-500 h-36'>
                <img className="w-1/12 h-16  border-solid border-2 border-red-500 " src="src/images/Profile-Photo2.svg" alt="User Image" />

                <div className="ms-2 border-solid border-2 border-blue-500 w-11/12 ">
                    <div>
                        <input type="text" placeholder="what's happing ?" className="border-solid border-2 border-yellow-500" />
                    </div>
                    <div className='flex justify-between border-solid border-2 border-red-500'>
                        <div className='flex flex-row'>
                            <a href=""><img src="src/images/Groupimg.svg" alt="" /></a> <a href=""><img src="src/images/Groupgif.svg" alt="" /></a> <a href=""><img src="src/images/Vector2.svg" alt="" /></a> <a href=""><img src="src/images/smile.svg" alt="icon smile" /></a><a href=""><img src="src/images/calendrier.svg" alt="" /></a>
                        </div>
                        <label htmlFor="">tweet</label>
                    </div>
                </div>
            </div>
        </>
    )
}