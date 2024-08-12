"use client"
import React, { useState } from "react"

const page = ()=>{
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault() //This line will prevent our form to get reloaded after submiting the form(clicking on the button)
    
    setMainTask([...mainTask, {title,desc}])

    setTitle("") 
    setDesc("")

    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t,i)=>{
      return (
      <li key={i} className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-around mb-6 w-2/3 border-l-2 border-black titleDesc">
          <h4 className="text-2xl font-semibold">{t.title}</h4>
          <h5 className="text-lg font-medium">{t.desc}</h5>
         </div>
         <button
         onClick={()=>{
          deleteHandler(i)
         }}
         className="bg-red-400 text-white px-4 py-2 font-bold rounded mb-6">Delete</button>
      </li>
      )
    })
  }

  return(
    <>
      <h1 className="bg-black text-white text-center py-10 text-5xl titleName">My Todo list</h1>
      <form onSubmit={submitHandler} className="flex justify-center items-center todoForm">
        <input 
        type="text"
        placeholder="Enter Title Here"
        className="border-2 border-zinc-900 mx-10 my-10 text-2xl px-2 py-1 rounded"

        //2-Way binding
        //------------------------
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        //------------------------
        />
        <input 
        type="text"
        placeholder="Enter Description"
        className="border-2 border-zinc-900 mx-10 my-10 text-2xl px-2 py-1 rounded"

        //2-Way binding
        //------------------------
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        //------------------------
        />
        <button className="bg-black text-white px-3 py-2 rounded-xl text-xl btn">Add Task</button>
      </form>
      <hr/>
      <div className="flex justify-center">
        <div className="p-8 w-2/3 border-t-2 border-zinc-900" >
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
    </>
  )
}

export default page