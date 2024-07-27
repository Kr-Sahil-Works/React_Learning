import {useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [password,setpassword] = useState("")

//   useRef hook
const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=> {
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed){ str+= "1234567890" }
    if (charAllowed)  { str+="!@#$%^&*(){}[]~`"}
    
  for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1 )
      pass += str.charAt(char)

    }
    setpassword(pass)
    
  }, [length,numberAllowed,charAllowed,setpassword])

const copyPasswordtoclipborad = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,200);
  window.navigator.clipboard.writeText(password)
},[password])

 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-[#e1581d]  bg-gray-500 text-center'>
      <h1 className='text-white text-center my-3 font-semibold text-[20px]'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text" 
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
         />

        <button 
        onClick={copyPasswordtoclipborad}
         className='outline-none bg-[#f25d00] text-white px-3 py-0.5 shrink-0'
         >Copy</button>

      </div>

  <div className='flex text-sm gap-x-2 font-extrabold text-[15px] tracking-[0.5px] '>
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={4}
          max={64}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label 
          className=''>
            Length : {length}</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
           <input 
           type="checkbox"
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={()=>{
            setnumberAllowed((previousvalue) => !(previousvalue));
           }} 
           />
           <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
           <input 
           type="checkbox"
           defaultChecked={charAllowed}
           id='characterInput'
           onChange={()=>{
            setcharAllowed((previousvalue) => !(previousvalue));
           }} 
           />
           <label htmlFor='numberInput'>Characters</label>
        </div>

  </div>



</div>
    </>
  )
}

export default App
