import TrendsforYouSQuid from "./TrendsforYouSQuid"

export default function TrendsFor() {
    return (
        <>
            <div className='bg-zinc-400 rounded-xl h-80'>
                <div className=''>
                    <div className='flex justify-between h-3'>
                        <span>Trend for You</span>
                        <img className='w-12' src="src/images/setting.svg" alt="" />
                    </div>
                    <TrendsforYouSQuid />
                    <TrendsforYouSQuid />
                    <TrendsforYouSQuid />
                    <button>Shore more</button>
                </div>
            </div>
        </>
    )
}

