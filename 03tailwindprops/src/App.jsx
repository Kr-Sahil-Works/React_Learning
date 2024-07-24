function App() {
  return (
    <>
<h1 className='text-[#ffffff] bg-green-400 p-5 rounded-md font-semibold italic'>Hello working</h1>

<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >

  <img class="w-24 h-24 rounded-full mx-auto" src="https://pm1.aminoapps.com/7629/1b0f0066f5b6afe4c60d82d140416ff11e3c5447r1-720-720v2_hq.jpg" alt="" width="384" height="512"/>

  <div class="pt-6 space-y-4" >
    <blockquote>
      <p class="text-lg font-medium">
        <span className="text-[#05f2ea]">“Tailwind CSS </span> is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
  </div>

  <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Nobita Nobi
      </div>

      <div class="text">
        Full stack Web Developer, Bangalore
      </div>
  </figcaption>
  
</figure>

{/* ________________________________________ */}

<div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://pm1.aminoapps.com/7629/1b0f0066f5b6afe4c60d82d140416ff11e3c5447r1-720-720v2_hq.jpg"
    alt="Profile_image"
    class="z-0 h-full w-full rounded-[10px] object-cover"/>


  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Nobita</h1>
    <p class="mt-2 text-sm text-gray-300">
     He is html,css,javascript and react learner.
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>

    </>
  )
}

export default App
