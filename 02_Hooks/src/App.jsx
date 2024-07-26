function App() {
  let counter = 9; 
  return (
    <>
    <h1 className="text-white">React and Hooks concepts</h1>
      <button onClick={counter}>ADD ME</button>
      <button onClick={counter}>REMOVE ME</button>
      <p>The value is now:{counter}</p>
      <footer>Finally the value of counter is ; {counter}</footer>
    </>
  )
}

export default App
