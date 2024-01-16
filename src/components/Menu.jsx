export default function Menu(src, element) {
    return (
        <>
            <div className='col-span-3 bg-red-500'>
                <img src={src} alt="logo twitter" />
                <h3>{element}</h3>
            </div>
        </>
    )
}