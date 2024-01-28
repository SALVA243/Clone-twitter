import Follow from "./Follow"
// import TrendsforYouSQuid from "./TrendsforYouSQuid"
import Menu from '../components/Menu';
import TrendsFor from './TrendsFor';


export default function Trends() {
    return (
        <>
            <div className='col-span-3' >
                <div className='fixed h-full w-96 flex flex-col gap-4'>
                    <div className='bg-zinc-400 flex rounded-xl h-12'>
                        <img className='w-6 h-6' src="src/images/Search.svg" alt="icon recherche" />
                        <span>Search twitter</span>
                    </div>
                    <TrendsFor />
                    <div className="bg-zinc-400 px-4 rounded-xl h-60">
                        <span>Who follow me</span>
                        <Follow />
                        <button>Shore more</button>
                    </div>
                    <div className="bg-transparent px-8">
                        <div>
                            <span>Terms of Service</span>
                            <span>Privaxy Policy</span>
                            <span>Cookie Policy</span>
                        </div>
                        <div>
                            <span>Imprint</span>
                            <span>Ads Info</span>
                            <span>More...</span>
                            <span>2021 twitter,inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

