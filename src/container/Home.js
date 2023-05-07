import React, { useState } from 'react';
import map from "../asset/metroMap.jpg"
import Route from "./Route";

const Home = () => {
  
    const [Form, setForm] = useState({});
    const formHandler = (e) => {
        setForm({
            ...Form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/route?from=${Form.From}&to=${Form.To}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        <Route data={data}></Route>
        // console.log(response);
    };
    
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div className='hidden sm:block'><img className="w-full h-full object-cover"src={map} alt="" /></div>
          <div className='bg-stone-600 flex flex-col justify-center'>
              <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-yellow-50 p-8 px-8 rounded-lg">
                  <h2 className='text-3xl text-gray-600 font-bold text-center'>PLAN YOUR JOURNEY</h2>
                  <div className='flex flex-col text-gray-500 py-2 '>
                      <label>From</label>
                      <input className='p2 rounded-lg bg-stone-300 mt-2 p-2 focus:border-blue-500 focus:bg-stone-200 focus:outline-none' name="From" onChange={formHandler} type="text"/>
                  </div>
                   <div className='flex flex-col text-gray-500 py-2'>
                      <label>To</label>
                      <input className='p2 rounded-lg bg-stone-300 mt-2 p-2 focus:border-blue-500 focus:bg-stone-200 focus:outline-none' name="To" onChange={formHandler} type="text"/>
                  </div>
                   
                  <button className='w-full my-5 py-3 bg-stone-400 shadow-lg shadow-stone-500/60' type="submit">Submit</button>
                
              </form>
          </div>
    </div>
  )
}

export default Home
