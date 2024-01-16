import Icon from "./Icon.jsx"
import Profiletwitt from "./Profiletwitt.jsx"
import Paragraphe from "./Paragraphe.jsx"
import Titre from "./Titre.jsx"


export default function Twitte({ twitte, styleSpan1 }) {

    return (
        <>
            <section className='flex border-solid border border-gray-300 px-2 '>

                <Profiletwitt stylerdiv='h-16 m-0' stylerImage='w-full size-16 rounded-full' src={twitte.author_avatar} />
                <div className='ms-2 w-full mb-0.5' >
                    <Titre stylerdiv='flex' styleSpan1={styleSpan1} titleSpan1={twitte.source} src='src/images/bagdgetPro.svg' styleSpan2='text-slate-400 me-2' titleSpan2={twitte.source} date={twitte.date} />
                    <Paragraphe styler='bg-transparent' texte={twitte.text} />
                    {twitte.image && <img className="rounded-lg w-full h-60" src={twitte.image} alt="" />}
                    <Icon stylerdiv='flex justify-between my-1.5' stylerdiv1='w-2/12 flex justify-between px-2' src1='src/images/Commentaire.svg' nbre1={twitte.replies} stylerdiv2='w-2/12 flex justify-between px-2' src2='src/images/fleche.svg' nbre2={twitte.retweets} stylerdiv3='w-2/12 flex justify-between px-2' src3='src/images/like.svg' nbre3={twitte.favorites} stylerdiv4='w-2/12' src4='src/images/Share.svg' />
                </div>

            </section>
        </>
    )
}