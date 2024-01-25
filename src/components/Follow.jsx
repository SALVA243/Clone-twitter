export default function Follow() {

    return (
        <>
            <div>

                <div className='h-16 m-0'>
                    <div className="flex">
                        <img className='w-full size-16 rounded-full' src="src/images/TwitteProfil.svg" alt="" />
                        <div className="flex">
                            <span className=''>The New York Times</span>
                            <img src="src/images/bagdgetPro.svg" alt="" />
                            <span className="text-slate-400 me-2">The New York Times</span>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="flex">
                        <img className='w-full size-16 rounded-full' src="src/images/Profile-Photo.svg" alt="" />
                        <div className="flex">
                            <span className=''>CNN</span>
                            <img src="src/images/bagdgetPro.svg" alt="" />
                            <span className="'text-slate-400 me-2">CNN</span>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="flex">
                        <img className='w-full size-16 rounded-full' src="src/images/ProfileTwitter.svg" alt="" />
                        <div className="flex">
                            <span className=''>Twitter</span>
                            <img src="src/images/bagdgetPro.svg" alt="" />
                            <span className="text-slate-400 me-2">Twitter</span>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
        </>
    )
}