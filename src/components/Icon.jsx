import LikerIconNbre from "./LikerIconNbre"



export default function Icon({ stylerdiv, stylerdiv1, src1, nbre1, stylerdiv2, src2, nbre2, stylerdiv3, stylerdiv4, src4 }) {

    return (
        <>
            <div className={stylerdiv}>
                <div className={stylerdiv1}>
                    <div className="rounded-full hover:bg-blue-500 w-12 ">
                        <img className="hover:text-blue-700" src={src1} alt="" />
                    </div>
                    <span>{nbre1}</span>
                </div>
                <div className={stylerdiv2}>
                    <div className="rounded-full hover:bg-blue-500 w-12">
                        <img className="hover:text-blue-700" src={src2} alt="" />
                    </div>
                    <span>{nbre2}</span>
                </div >
                <div className={stylerdiv3}>
                    <LikerIconNbre />
                </div>

                <div className={stylerdiv4}>
                    <div className="rounded-full hover:bg-blue-500 w-12">
                        <img src={src4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}