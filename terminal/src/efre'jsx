import { useState } from "react";


const Terminal = () => {


const [ input, setInput] = useState("")


const inputSetting = 
    e=>setInput(e.target.value) 
 
const OutputUsing = (e) => {
 
    
        if (e.key === "Enter"){
        switch (input){
          case "b":
console.log("ok")
window.location.reload(false)
      
break
          
          default :
          console.log("no");
          break
        }
        }
        
      }

     return(<>

<input 
      type="text" 
      className="text-green-500	bg-transparent outline-none"
      value={input}
      onChange={inputSetting}
      onKeyDown={OutputUsing}

      />
    </>
    )
}


export default Terminal