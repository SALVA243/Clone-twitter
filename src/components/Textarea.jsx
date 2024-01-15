export default function Textarea({ styler, name, id, cols, rows, texte }) {

    return (
        <>
            <textarea className={styler} name="" id="" cols={cols} rows={rows}>{texte}</textarea>
        </>
    )
}