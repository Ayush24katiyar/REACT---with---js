import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [symbolAllowed, setsymbolAllowed] = useState(false);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [password, setpassword] = useState("");


  const [copyLabel , setcopyLabel] = useState("copy")




  const genratePassword = useCallback(() => {
    let pass = "";
    let str = "QWEERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgasdfzxcvmnb";
    if (numberAllowed) str += "1203948567";
    if (symbolAllowed) str += "!@#$%^&*()_";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    genratePassword();
  }, [length, numberAllowed, symbolAllowed]);

  const CopyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
    setcopyLabel('copied !')
    setTimeout(() => setcopyLabel("copy") , 3000)
  };

  const passwordRef = useRef()

  return (
    <>
      <div
        className="w-full max-w-wd m-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500
   "
      >
        <h1 className="text-white text-center my-3">password generator</h1>
        <div
          className="flex justify-center shadow rounded-b-full overflow-hidden 
     mb-4 "
        >
          <input
            type="text"
            className="bg-white rounded-2xl"
            readOnly
            value={password}
            placeholder="password"
            ref={passwordRef}

          />

          <button
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 rounded-2xl    "
            onClick={CopyPasswordToClipboard}
          >
            {copyLabel} 
          </button>
        </div>

        <div className="flex justify-center text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
                // high level talk guys !!
              }}
              name=""
              id=""
            />
            <label htmlFor="number">numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              onChange={() => {
                setsymbolAllowed((allow) => !allow);
              }}
            />
            <label htmlFor="symbol">symbol</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="button"
              value="REFRESH"
              className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600"
              onClick={genratePassword}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
