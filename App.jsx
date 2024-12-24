import { useState } from "react"
function App() {
  let [color,setcolor]=useState('olive');
  return(
    <div className="w-full h-screen duration-200tion" style={{backgroundColor:color}}>
      <div className="w-full fixed bottom-12 flex flex-wrap inset-x-6 x-2 justify-center">
        <div className="bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl inset-x-2">
          <button onClick={()=>setcolor('red')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-red-600">Red</button>
          <button onClick={()=>setcolor('green')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-green-600">green</button>
          <button onClick={()=>setcolor('blue')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-blue-600">blue</button>
          <button onClick={()=>setcolor('orange') }className="outline-none px-4 py-1 rounded-full text-white shadow-xl  bg-orange-600">Orange</button>
          <button onClick={()=>setcolor('gray')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-gray-600">Gray</button>
          <button onClick={()=>setcolor('yellow')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-yellow-600">Yellow</button>
          <button onClick={()=>setcolor('pink')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-pink-600">Pink</button>
          <button onClick={()=>setcolor('purple')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-purple-600">Purple</button>
          <button onClick={()=>setcolor('brown')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-red-500">Brown</button>
          <button onClick={()=>setcolor('white')}  className="outline-none px-4 py-1 rounded-full text-black shadow-xl bg-white">White</button>
          <button onClick={()=>setcolor('black')}  className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-black">Black</button>

        </div>
      </div>
    </div>
   //here we are not writing the color in the {} bcuz we already have to us the double {} here.
  )
}

export default App
