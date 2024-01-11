import { useState } from 'react'
import SideBar from "./components/SideBar"
import Header from "./components/Header"
import Publication from "./components/Publication"
import Twitte from "./components/Twitte"
import Trends from "./components/Trends"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-transparent grid grid-cols-12 w-8/12 m-auto gap-4 '>
        <SideBar />
        <div className='container_midle bg-orange-400 col-span-6'>
          <Header />
          <Publication />
          <Twitte />
        </div>
        <div className='container_right bg-lime-400 col-span-3' >
          <Trends />
        </div>
      </div>
    </>
  )
}

export default App
