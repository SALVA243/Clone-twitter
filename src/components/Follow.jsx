
export default function Follow() {

    return (
        <>
            <div>
                <div className=''>
                    <div className="flex justify-between">
                        <img className='rounded-full' src="src/images/TwitteProfil.svg" alt="" />
                        <div >
                            <div className="flex">
                                <span className=''>The New York Times</span>
                                <img src="src/images/bagdgetPro.svg" alt="" />
                            </div>
                            <span className="text-slate-400">The New York Times</span>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="flex justify-between">
                        <img className='rounded-full' src="src/images/Profile-Photo.svg" alt="" />
                        <div >
                            <div className="flex">
                                <span className=''>CNN</span>
                                <img src="src/images/bagdgetPro.svg" alt="" />
                            </div>
                            <span className="text-slate-400">CNN</span>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="flex justify-between">
                        <img className='rounded-full' src="src/images/ProfileTwitter.svg" alt="" />
                        <div >
                            <div className="flex">
                                <span className=''>Twitter</span>
                                <img src="src/images/bagdgetPro.svg" alt="" />
                            </div>
                            <span className="text-slate-400">Twitter</span>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
        </>
    )
}