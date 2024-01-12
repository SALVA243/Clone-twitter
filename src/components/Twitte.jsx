import Profile from "./Profile.jsx"
import Titre from "./Titre.jsx"


export default function Twitte() {

    return (
        <>
            <section className='flex border-solid border border-gray-300'>

                <Profile stylerdiv='h-16 m-0' stylerImage='w-full size-16' src="src/images/Profile-Photo.svg" />

                <div className='ms-2 w-full mb-0.5' >

                    <Titre stylerdiv='flex flex-row ' styleSpan1='w-9' titleSpan1='CNN' src='src/images/bagdgetPro.svg' styleSpan2='w-1/6 text-slate-400' titleSpan2='@CNN' />

                    <textarea className='bg-transparent w-full resize-none' name="" id="" cols="30" rows="5">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
                    </textarea>

                    <div className='flex flex-row justify-between '>
                        <div className='w-2/12 flex justify-between px-2'>
                            <img src="src/images/Commentaire.svg" alt="" />
                            <span>57</span>
                        </div>
                        <div className='w-2/12 flex justify-between px-2'>
                            <img src="src/images/fleche.svg" alt="" />
                            <span>144</span>
                        </div >
                        <div className='w-2/12 flex justify-between px-2'>
                            <img src="src/images/like.svg" alt="" />
                            <span>184</span>
                        </div>
                        <div className='w-2/12'>
                            <img src="src/images/Share.svg" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}