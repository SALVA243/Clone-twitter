export default function Twitte() {

    return (
        <>
            <section className='flex border-solid border-2 border-sky-500'>

                <div className='h-24 w-2/12 m-0 border-solid border-2 border-green-500'>
                    <img className="w-full" src="src/images/Profile-Photo.svg" alt="" />
                </div>

                <div className='ms-2 w-10/12 border-solid border-2 border-yellow-500' >

                    <div className='flex flex-row border-solid border-2 border-red-500 '>
                        <label className='w-1/6 border-solid border-2 border-green-500' htmlFor="">CNN</label>
                        <img src="src/images/bagdgetPro.svg" alt="" />
                        <label className='w-1/6 border-solid border-2 border-blue-500' htmlFor="">@CNN</label>
                    </div>

                    <textarea className='bg-transparent w-full border-solid border-2 border-blue-500' name="" id="" cols="30" rows="5">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
                    </textarea>

                    <div className='flex flex-row justify-between border-solid border-2 border-red-500 '>
                        <div className='w-1/6 flex flex-row border-solid border-2 border-yellow-500'>
                            <img src="src/images/Commentaire.svg" alt="" />
                            <input className="bg-transparent" type="number" placeholder='57' />
                        </div>
                        <div className='w-1/6 flex flex-row border-solid border-2 border-blue-500'>
                            <img src="src/images/fleche.svg" alt="" />
                            <input className="bg-transparent" type="number" placeholder='144' />
                        </div >
                        <div className='w-1/6 flex flex-row border-solid border-2 border-black-500'>
                            <img src="src/images/like.svg" alt="" />
                            <input className="bg-transparent" type="number" placeholder='184' />
                        </div>
                        <div className='w-1/6 border-solid border-2 border-purple-500'>
                            <img src="src/images/Share.svg" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}