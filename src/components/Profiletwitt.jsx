export default function Profiletwitt({ stylerdiv, stylerImage, src }) {

    return (
        <>
            <div className={stylerdiv}>
                <img className={stylerImage} src={src} alt="" />
            </div>
        </>
    )
}