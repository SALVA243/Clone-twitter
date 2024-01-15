import Icon from "./Icon.jsx"
import Profile from "./Profile.jsx"
import Textarea from "./Textarea.jsx"
import Titre from "./Titre.jsx"


export default function Twitte({ twitte, srcprofile, styleSpan1, titleSpan1, titleSpan2, date, texte, phototwitte, rows }) {

    let objet = {
        "author_avatar": "https://picsum.photos/200?random=1609942590000",
        "source": "Apple",
        "date": 1609942590000,
        "favorites": "396603",
        "id": "1346822958006886400",
        "isVerified": false,
        "replies": "896",
        "retweets": "54694",
        "text": "Even Mexico uses Voter I.D.",
        "image": "https://picsum.photos/1024/200?random=1346822958006886400"
    }

    return (
        <>
            <section className='flex border-solid border border-gray-300 px-2'>

                <Profile stylerdiv='h-16 m-0' stylerImage='w-full size-16' src={twitte.author_avatar} />

                <div className='ms-2 w-full mb-0.5' >
                    <Titre stylerdiv='flex' styleSpan1={styleSpan1} titleSpan1={twitte.source} src='src/images/bagdgetPro.svg' styleSpan2='w-1/6 text-slate-400' titleSpan2={twitte.source} date={twitte.date} />

                    <Textarea styler='bg-transparent w-full resize-none' cols="30" rows={rows} texte={twitte.text} />
                    <img className="rounded-lg" src={twitte.image} alt="" />
                    <Icon stylerdiv='flex justify-between my-1.5' stylerdiv1='w-2/12 flex justify-between px-2' src1='src/images/Commentaire.svg' nbre1={twitte.replies} stylerdiv2='w-2/12 flex justify-between px-2' src2='src/images/fleche.svg' nbre2={twitte.retweets} stylerdiv3='w-2/12 flex justify-between px-2' src3='src/images/like.svg' nbre3={twitte.favorites} stylerdiv4='w-2/12' src4='src/images/Share.svg' />
                </div>

            </section>
        </>
    )
}