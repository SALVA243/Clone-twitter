export default function Titre({ stylerdiv, styleSpan1, titleSpan1, src, styleSpan2, titleSpan2, date }) {

    return (
        <>
            <div className={stylerdiv}>
                <span className={styleSpan1}>{titleSpan1}</span>
                <img src={src} alt="" />
                <span className={styleSpan2}>{titleSpan2}</span>
                <span>{date}</span>
            </div>
        </>
    )
}