export default function Twitte() {

    return (
        <>
            <section className='flex border-solid border border-sky-500'>

                <div className='h-16 m-0'>
                    <img className="w-full size-16" src="src/images/Profile-Photo.svg" alt="" />
                </div>

                <div className='ms-2 w-full' >

                    <div className='flex flex-row '>
                        <span className='w-1/6 border-solid border border-green-500' htmlFor="">CNN</span>
                        <img src="src/images/bagdgetPro.svg" alt="" />
                        <span className='w-1/6 border-solid border border-blue-500' htmlFor="">@CNN</span>
                    </div>

                    <textarea className='bg-transparent w-full border-solid border border-blue-500 resize-none' name="" id="" cols="30" rows="5">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
                    </textarea>

                    <div className='flex flex-row justify-between border-solid border border-red-500 '>
                        <div className='w-2/12 flex justify-between border-solid border border-yellow-500 px-2'>
                            <img src="src/images/Commentaire.svg" alt="" />
                            <span>57</span>
                        </div>
                        <div className='w-2/12 flex justify-between border-solid border border-blue-500 px-2'>
                            <img src="src/images/fleche.svg" alt="" />
                            <span>144</span>
                        </div >
                        <div className='w-2/12 flex justify-between border-solid border border-black-500 px-2'>
                            <img src="src/images/like.svg" alt="" />
                            <span>184</span>
                        </div>
                        <div className='w-2/12 border-solid border border-purple-500'>
                            <img src="src/images/Share.svg" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}