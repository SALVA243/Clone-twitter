import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='principal_container bg-slate-400 m-8 flex flex-row w-3/4 m-auto'>
        <div className='left_container bg-neutral-500 basis-1/4'>
          <img src="src/images/Vector.svg" alt="logo twitter" />
        </div>
        <div className='mindle_container bg-orange-400 basis-1/2'>
          <header> <div>HOME</div><div>✨</div> </header>
          <section>
          </section>
        </div>
        <div className='right_container bg-lime-400 basis-1/4' >
          <div className='rounded-full'>
            <img src="src/images/Search-Icon.svg" alt="icon recherche" />
            <p>Search twitter</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
