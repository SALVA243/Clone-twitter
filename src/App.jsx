import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='principal_container bg-slate-400 m-8 '>
        <div className='left_container bg-neutral-500'>
          <img src="src/images/Vector.svg" alt="logo twitter" />
        </div>
        <div className='mindle_container bg-orange-400'>
          <header> <div>HOME</div><div>✨</div> </header>
          <section>
          </section>
        </div>
        <div className='right_container bg-lime-400' >
          <img src="src/images/Search-Icon.svg" alt="icon recherche" />
        </div>
      </div>
    </>
  )
}

export default App
