import Card from "./components/Card";

function App() {
  
  let simpleobj={
    name:"Nobita",
    age: 18
  }
  let myarr=[1,2,3,4,5]
  
  let imgsrc1 ="https://pm1.aminoapps.com/7629/1b0f0066f5b6afe4c60d82d140416ff11e3c5447r1-720-720v2_hq.jpg";
  let imgsrc2="https://avatars.githubusercontent.com/u/29142494?v=4";
  

  return (
    <>
<h1 className='text-[#ffffff] bg-green-400 p-5 rounded-md font-semibold italic'>Hello working</h1>

<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >

  <img className="w-24 h-24 rounded-full mx-auto" src="https://pm1.aminoapps.com/7629/1b0f0066f5b6afe4c60d82d140416ff11e3c5447r1-720-720v2_hq.jpg" alt="" width="384" height="512"/>

  <div className="pt-6 space-y-4" >
    <blockquote>
      <p className="text-lg font-medium">
        <span className="text-[#05f2ea]">“Tailwind CSS </span> is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
  </div>

  <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Nobita Nobi
      </div>

      <div className="text">
        Full stack Web Developer, Bangalore
      </div>
  </figcaption>
  
</figure>

<div className="flex gap-5 ml-5 my-10">

{/* <Card username ="Akkia" simpleobj={simpleobj} />
<Card username ="Nobita" myarr={myarr} /> */}

<Card username ="Akkia" btntext="vist me ->" image_var={imgsrc1} />
<Card username ="Nobita" btntext="click me" image_var={imgsrc2} />

</div>

    </>
  )
}

export default App
