import { useState } from 'react';
import './App.css';

function App() {
const [ input, setInput] = useState("")
const [arr, setArr] = useState([])



  return (
    <div className="App">
      <input 
      type="text" 
      value={input}
      onChange={e=>setInput(e.target.value)}
      onKeyDown={e=>{
        if (e.key === "Enter"){
        switch (input){
          case "ls":
console.log("ok")
         setArr( [
  "Who am I, What am I... A question", <br/>, "for the philosophers! ",
  "well, mewtwo asked himself too and didn't find out",
  "<br/>"])
;
          break
          default :
          console.log("no");
          break
        }
        }
      }}

      />
      <div 
 
      className="terminal">
<p>{arr}</p>
      </div>
    </div>
  );
}

export default App;
