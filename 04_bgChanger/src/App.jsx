import { useState } from 'react'


function App() {
 
  const [color,setColor] = useState("#100123e2")

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[#ffffffd0] px-3 py-2 rounded-[10px] '>

          <button onClick={()=> setColor("#e11d48")} className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#e11d48"}}>RED</button>
          
          <button onClick={()=> setColor("#090170e1")} className='outline-none px-4 py-1 rounded-md text-[#ffffff] shadow-sm'  style={{backgroundColor: "#090170e1"}}>Blue</button>

          <button onClick={()=> setColor("#71ec19e1")}  className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#71ec19e1"}}>Green</button>

          <button onClick={()=> setColor("#100123")}  className='outline-none px-4 py-1 rounded-md text-[#ffffffe1] shadow-sm'  style={{backgroundColor: "#100123"}}>Purple</button>

          <button onClick={()=> setColor("#eb5210")}  className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#eb5210"}}>Orange</button>

          <button onClick={()=> setColor("#353535")}  className='outline-none px-4 py-1 rounded-md text-[#ffffff] shadow-sm'  style={{backgroundColor: "#353535"}}>Gray</button>

          <button onClick={()=> setColor("#f1d715")}  className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#f1d715"}}>Yellow</button>

          <button onClick={()=> setColor("#E6E6FA")}  className='outline-none px-4 py-1 rounded-md text-[#ffffffe1] shadow-sm'  style={{backgroundColor: "#E6E6FA"}}>Lavender</button>

          <button onClick={()=> setColor("#FFC0CB")}  className='outline-none px-4 py-1 rounded-md text-[#ffffffe1] shadow-sm'  style={{backgroundColor: "	#FFC0CB"}}>Pink</button>

        </div>
      </div>
    </div>
  )
}

export default App
