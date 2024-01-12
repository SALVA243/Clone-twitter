export default function Titre({ stylerdiv, styleSpan1, titleSpan1, stylerImage, src, styleSpan2, titleSpan2 }) {

    return (
        <>
            <div className={stylerdiv}>
                <span className={styleSpan1}>{titleSpan1}</span>
                <img src={src} alt="" />
                <span className={styleSpan2}>{titleSpan2}</span>
            </div>
        </>
    )
}