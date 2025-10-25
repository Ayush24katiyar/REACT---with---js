import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white/30 rounded-lg p-3 text-sm flex items-start gap-4 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/60 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          className="outline-none w-full bg-transparent py-1.5 text-black appearance-none"
          placeholder="amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            const v = e.target.value;
            onAmountChange && onAmountChange(v === "" ? 0 : Number(v));
          }}
        />
      </div>

      <div className="w-1/2 flex flex-col items-end">
        <p className="text-black/60 mb-2 w-full text-right">currency type</p>
        <select
          name="currency"
          id={`${id}-select`}
          className="rounded-md px-2 py-1 bg-white/80 border border-gray-200 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
