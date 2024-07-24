import React from 'react'

// function Card(props) {
function Card({username="Joe",btntext="Vist me",image_var="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMomaG6kUMXc0k_nGJQtrL4UB4V1dtameFbw&s"}) {
    console.log("username",username);
    console.log("button_text",btntext);
    return (
<div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src={image_var}
    alt="Profile_image"
    className="z-0 h-full w-full rounded-[10px] object-cover"/>


  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
     He is html,css,javascript and react learner.
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {/* View Profile → */}
      {btntext}
    </button>
  </div>
</div>
    )
}

export default Card
