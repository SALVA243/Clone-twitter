export default function Publication() {

    return (
        <>

            <div className='flex flex-row justify-around border-solid border-2 border-yellow-500 '>
                <div className="w-1/6 border-solid border-2 border-green-500">
                    <img src="src/images/pingouin-anime-dessin-anime-ecouteurs.jpg" alt="User Image" className='rounded-full size-10' />
                </div>
                <div className="border-solid border-2 border-blue-500">
                    <div>
                        <input type="text" placeholder="what's happing ?" />
                    </div>
                    <div className='flex justify-between'>
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