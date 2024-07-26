import React,{useState} from "react";

function App() {

let [counter,setCounter] = useState(9)
// let counter = 9; // This variable cannot propogate in UI by updating.

  function addvalue() {
    if (counter < 20) {
      counter = counter + 1
    setCounter(counter)
    console.log("clicked and value is now : ",{counter})
    }
    else{
      console.log("value reached its limit :(  ");
    }
  }

  const revvalue= ()=>{ 
    if (counter > 0) {
      counter = counter - 1
    setCounter(counter)
    console.log("clicked and value is now : ",{counter}) 
    }
    else{
      console.log("value reached its limit :(  ");
    }
  }


  return (
    <>
    <div className="flex flex-col m-auto p-80  ">
    <h1 className="font-bold text-[40px] text-center">React and Hooks concepts</h1>
      <button onClick={addvalue}>ADD ME → {counter}</button>
      <button onClick={revvalue}>REMOVE ME → {counter}</button>
      <p className="mt-5 font-semibold">The value is now : {counter}</p>
      <br />
      <footer className="mt-[-15px] font-semibold">Finally the value of counter is : {counter}</footer>
      </div>
    </>
  )
}

export default App
