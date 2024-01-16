export default function Paragraphe({ styler, texte }) {

    return (
        <>
            <p className={styler} >{texte}</p>
        </>
    )
}