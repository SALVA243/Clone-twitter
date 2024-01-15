export default function Icon({ stylerdiv, stylerdiv1, src1, nbre1, stylerdiv2, src2, nbre2, stylerdiv3, src3, nbre3, stylerdiv4, src4 }) {

    return (
        <>
            <div className={stylerdiv}>
                <div className={stylerdiv1}>
                    <img src={src1} alt="" />
                    <span>{nbre1}</span>
                </div>
                <div className={stylerdiv2}>
                    <img src={src2} alt="" />
                    <span>{nbre2}</span>
                </div >
                <div className={stylerdiv3}>
                    <img src={src3} alt="" />
                    <span>{nbre3}</span>
                </div>
                <div className={stylerdiv4}>
                    <img src={src4} alt="" />
                </div>
            </div>
        </>
    )
}