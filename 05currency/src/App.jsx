import { useState } from "react";
import "./App.css";
import InputBox from "./components/input.jsx";
import useCurrencyInfo from "./hooks/useCurrency.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyData = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyData ?? {});

  const convert = () => {
    const rate = currencyData?.[to] ?? 0;
    setConvertedAmount(Number(amount) * rate);
  };

  const swap = (e) => {
    e && e.preventDefault();
    // capture current values
    const prevFrom = from;
    const prevTo = to;
    const prevAmount = amount;
    const prevConverted = convertedAmount;

    // swap currencies and values
    setFrom(prevTo);
    setTo(prevFrom);
    setAmount(prevConverted);
    setConvertedAmount(prevAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-3">
              <InputBox
                label="from"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(a) => setAmount(a)}
                selectedCurrency={from}
              />
            </div>

            <div className="relative w-full flex justify-center my-3">
              <button
                className="inline-flex items-center border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                onClick={swap}
                type="button"
              >
                ⇅ swap
              </button>
            </div>

            <div className="w-full mb-3">
              <InputBox
                label="to"
                amount={convertedAmount}
                amountDisable={true}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>

            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" type="submit">
              CONVERT {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
