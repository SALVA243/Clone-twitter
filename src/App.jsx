import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='principale_container'>
        <div className='left_container'></div>
        <div className='mindle_container'>
          <header> <div>HOME</div><div>✨</div> </header>
          <section>
          </section>
        </div>
        <div className='right_container' ></div>
      </div>
    </>
  )
}

export default App
