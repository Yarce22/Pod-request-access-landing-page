import React from "react";
import { useState } from "react";

const Inputs = () => {
  const [isAEmail, setEmailValue] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);
  }

  const isInputValueAEmail = () => {
    const value = inputValue;
    const valueString = value.includes('@') && value.includes('.');
    setEmailValue(valueString);
  }

  return (
    <>
      <form className="flex flex-col justify-center items-center w-full py-10 gap-8">
        <label className="w-full" htmlFor="">
          <input 
            className="w-full h-12 px-8 bg-input opacity-100 rounded-full font-bold text-sm text-clear border-none outline-none"
            type="email"
            placeholder={'Email address'}
            onChange={handleText}
          />
          <span className={`${isAEmail ? 'hidden' : 'block'} pl-8 text-xs text-red-600 font-bold`}>Opps! Please check your email</span>
        </label>
        <button
          className="w-full h-12 rounded-full text-base font-bold text-background bg-title hover:bg-hover"
          type="button"
          onClick={isInputValueAEmail}
        >
          Request Access
        </button>
      </form>
    </>
  );
}

export default Inputs;