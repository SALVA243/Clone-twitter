import { useState } from "react"

export default function LikerIconNbre({ }) {
    const [imglike, setImglike] = useState(false)
    const [like, setLike] = useState(0)
    const handleclick = () => {

        setImglike(!imglike)
        imglike ? setLike(like - 1) : setLike(like + 1)

    }

    const likeIcon = imglike ? 'src/images/red-heart-icon.svg' : 'src/images/like.svg';
    //    const LikeIcon=state ? BsFillHeartFill :BsHeart

    return (
        <>
            <div className="rounded-full hover:bg-blue-500 w-12">
                <img onClick={handleclick} className="hover:text-blue-700" src={likeIcon} alt="" />
            </div>
            <span>{like}</span>
        </>
    )
}