import { useState } from 'react'

function App() {
 
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>
            Red
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>
            Blue
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>
            Green
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>
            Olive
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>
            Black
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>
            Pink
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=> setColor("yellow")}>
            Yellow
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>
            Orange
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"cyan"}} onClick={()=> setColor("cyan")}>
            Cyan
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
