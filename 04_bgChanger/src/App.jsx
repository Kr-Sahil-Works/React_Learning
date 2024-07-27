import { useState } from 'react'


function App() {
 
  const [color,setColor] = useState("#100123e2")

  return (
    
<div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    
<h1 className='flex justify-center text-[#fff] font-bold font-sans text-[22px]'>Read Me</h1>
<div className='border-[4px] solid border-[#fff] mb-5'></div>
    <p className='flex flex-wrap px-40 pb-20 justify-center text-[#fff] font-semibold font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laboriosam maxime similique pariatur fugiat dolorum natus error voluptates! Quasi magnam quia inventore illo omnis voluptatibus alias, ratione neque at impedit ipsum, adipisci reiciendis, nihil fugit minima. Nisi at illum incidunt eligendi natus delectus rerum atque accusantium, labore quibusdam quasi repellat cupiditate aut consequatur explicabo eveniet iste tenetur debitis voluptatem, omnis ea? Fuga corporis culpa at expedita delectus cumque labore fugiat odit facilis quod reiciendis dolorem architecto beatae minus, eius, adipisci fugit. Quo, animi nulla. Nemo a nesciunt repellat suscipit tempora officiis dolor dolore laborum ad quaerat, vero accusantium nobis totam quidem vel nam natus odio fugiat qui magnam autem! Optio, aperiam. Dicta illum accusamus deserunt velit quidem porro sapiente beatae veritatis veniam laborum odit dignissimos impedit, id dolorem in suscipit ratione adipisci error sint quas iusto animi perferendis, dolorum vel. Corporis placeat voluptate cumque laboriosam amet quaerat recusandae laborum error non itaque. Quas pariatur vero eaque harum aliquam soluta perspiciatis excepturi laudantium maiores itaque omnis nostrum, expedita asperiores necessitatibus corrupti. Quasi doloribus cumque exercitationem at, enim iure itaque tempora consequatur hic. Temporibus quae nam architecto ipsam, minus porro? Blanditiis ipsam doloremque aliquid quas. Ipsam, dicta necessitatibus. Vel enim et assumenda. Thanks for reading me lol!!!!</p>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[#ffffffd0] px-3 py-2 rounded-[10px] '>

          <button onClick={()=> setColor("#e11d48")} className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#e11d48"}}>RED</button>
          
          <button onClick={()=> setColor("#015a5e")} className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#015a5e"}}>Blue</button>

          <button onClick={()=> setColor("#718900")}  className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#718900"}}>Green</button>

          <button onClick={()=> setColor("#100123")}  className='outline-none px-4 py-1 rounded-md text-[#ffffffe1] shadow-sm'  style={{backgroundColor: "#100123"}}>Purple</button>

          <button onClick={()=> setColor("#eb5210")}  className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#eb5210"}}>Orange</button>

          <button onClick={()=> setColor("#353535")}  className='outline-none px-4 py-1 rounded-md text-[#ffffff] shadow-sm'  style={{backgroundColor: "#353535"}}>Gray</button>

          <button onClick={()=> setColor("#FFAF00")}  className='outline-none px-4 py-1 rounded-md text-[#fff] shadow-sm'  style={{backgroundColor: "#FFAF00"}}>Yellow</button>

          <button onClick={()=> setColor("#BB9AB1")}  className='outline-none px-4 py-1 rounded-md text-[#ffffffe1] shadow-sm'  style={{backgroundColor: "#BB9AB1"}}>Lavender</button>

          <button onClick={()=> setColor("#EB3678")}  className='outline-none px-4 py-1 rounded-md text-[#ffffffe1] shadow-sm'  style={{backgroundColor: "	#EB3678"}}>Pink</button>

        </div>
      </div>
    </div>
  )
}

export default App
