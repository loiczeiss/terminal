/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
import Terminal from './Terminal';

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const togogo = () => {
    setIsClosed(false);
  };

  const errorMessage = [<br />, `bash: ${input}: command not found`];
  const whoishe = [
    <br />,
    "Hey, I'm Loïc!ðŸ‘‹",
    "I'm a future Front-End developer and content creator, who builds emotions into interfaces.",
    <br />,
    "In this experience, I'll try to display my coding skills as well as my creativity.",
    <br />,
    "For years, I've been keeping memories of my darkest thoughts, my brightest ideas",
    <br />,
    "but mostly kept it to myself due to shyness and anxiety. I'm mostly convinced I am",
    <br />,
    "a part of the next generation of creators and it is time I claim my place.",
    <br />,
    <br />,
  ];

  return (
    <div className="App bg-black">
      <div id="termina" className="text-white flex flex-row w-full">
        <div>
          <p>{"-Loic@consciousness: $ -" + input}</p>
          <p className="text-white">{arr}</p>
        </div>
        <div>
          {" "}
          {isClosed && (
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  switch (input) {
                    case "a":
                      console.log("ok");

                      setArr(whoishe);
                      toggleModal();
                      togogo();
                      return input;

                    default:
                      setArr(errorMessage);
                      console.log("no");
                    return <input type="text" />
                    
                  }
                }
              }}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="terminal flex flex-row text-white">
          <p>{"-Loic@consciousness: $ -" + input}</p>
          <Terminal className="text-green" />
        </div>
      )}
    </div>
  );
}

export default App;
