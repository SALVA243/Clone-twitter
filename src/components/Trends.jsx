import Follow from "./Follow"
import TrendsforYouSQuid from "./TrendsforYouSQuid"


export default function Trends() {
    return (
        <>
            <div className="fixed top-0">
                <div className='rounded-full bg-zinc-400 flex'>
                    <img src="src/images/Search.svg" alt="icon recherche" />
                    <p>Search twitter</p>
                </div>
                <div className='TrendsforYou rounded-full bg-zinc-400 flex'>
                    <div>
                        <span>Trend for You</span>
                        <img src="src/images/setting.svg" alt="" />
                        <TrendsforYouSQuid />
                        <TrendsforYouSQuid />
                        <TrendsforYouSQuid />
                        <button>Shore more</button>
                    </div>
                    <div>
                        <span>Who follow me</span>
                        <Follow />
                        <button>Shore more</button>
                    </div>
                    <div>
                        <span>Terms of Service</span>
                        <span>Privaxy Policy</span>
                        <span>Cookie Policy</span>
                        <span>Imprint</span>
                        <span>More...</span>
                        <span>2021 twitter,inc.</span>

                    </div>
                </div>
            </div>
        </>
    )
}

