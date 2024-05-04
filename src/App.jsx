import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0);
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  useEffect(()=>{
    const handelCourser = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    }
    window.addEventListener('mousemove' , handelCourser);
    return () => {
    window.removeEventListener('mousemove' , handelCourser);

    }
  } ,[])

  return (
    <>
    <motion.dev transition={{duration:0}} animate={{x,y}} className='courser absolute w-[40px] h-[40px] top-0 left-0 bg-transparent border border-white border-2 pointer-events-none rounded-full mt-[-20px] ml-[-20px]'></motion.dev>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
