import { useState } from "react";

function Header(){
   const [color, setColor] = useState(" ")
   const [TextColor, SettextColor] = useState( )

   

   const bgColor = () =>{
      setColor("yellow")
      SettextColor(true)
   }

   const resetColor = () => {
      setColor("white")
      SettextColor(false)
   }
   return <div>
      <h1 style={ {backgroundColor: color} } className="bg-red-600 h-[400px] w-[400px] rounded-full ml-[650px] mt-[20px] border-4 border-black"></h1>
      <div   className="space-x-6 text-5xl  ">
      <button style={{color: TextColor ==  true ? "red" : ""}}  onClick={bgColor} className=" bg-white border-2 border-blue-500 px-6 py-3 ml-[700px] mt-8 ">On  </button>
      <button style={{color: TextColor ==  false ? "red" : ""}}   onClick={resetColor} className=" bg-white border-2 border-blue-500 px-6 py-3 " >OFF </button>
      </div>
   </div>
}
export default Header