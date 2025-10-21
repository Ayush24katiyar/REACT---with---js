import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState('#f5f5dc') ;

  

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor : color}}>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex items-center justify-center gap-3 shadow-lg bg-white/90 px-3 py-2 rounded-3xl">
          <button
            type="button"
            className="px-5 py-2 rounded-full bg-white text-black font-medium shadow-md  focus:outline-none focus:ring-2 transition-transform active:translate-y-0.5"
            onClick={() => setcolor('pink')}
          >
            pink
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full bg-white text-black font-medium shadow-md  focus:outline-none focus:ring-2 transition-transform active:translate-y-0.5"
            onClick={() => setcolor('orange')}
          >
            orange
          </button>

          <button
            className="px-5 py-2 rounded-full bg-whitee text-black font-medium shadow-md focus:outline-none focus:ring-2 transition-transform active:translate-y-0.5"
            onClick={() => setcolor('purple')}
          >
            purple
          </button>

          <button
            className="px-5 py-2 rounded-full bg-whitee text-black font-medium shadow-md focus:outline-none focus:ring-2 transition-transform active:translate-y-0.5"
            onClick={() => setcolor('violet')}
          >
            violet
          </button>

          <button
            className="px-5 py-2 rounded-full bg-whitee text-black font-medium shadow-md focus:outline-none focus:ring-2 transition-transform active:translate-y-0.5"
            onClick={() => setcolor('#93C572')}
          >
            pista 
          </button>

          <button
            className="px-5 py-2 rounded-full bg-whitee text-black font-medium shadow-md focus:outline-none focus:ring-2 transition-transform active:translate-y-0.5"
            onClick={() => setcolor('#FFA4A4')}
          >
            bisque
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
