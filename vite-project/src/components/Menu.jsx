import React from 'react';
import Buttoons from './Buttoons';

export default function Menu({ setOption, setOption2, setOption3 }) {
  const handleClick = () => {
    setOption(true);
    setOption2(false);
    setOption3(false);
  };

  const handleClick2 = () => {
    setOption2(true);
    setOption(false);
    setOption3(false);
  };

  const handleClick3 = () => {
    setOption3(true);
    setOption(false);
    setOption2(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-5 w-full max-w-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-black mb-1">
          Select an App
        </h1>
        <p className="text-gray-600 text-center mb-4 text-sm font-medium">
          Choose one of the applications below to get started.
        </p>

        <Buttoons variant="menu-1" onClick={handleClick}>
          CalculatorS
        </Buttoons>

        <Buttoons variant="menu-2" onClick={handleClick2}>
          CalculatorB
        </Buttoons>

        <Buttoons variant="menu-3" onClick={handleClick3}>
          Cards
        </Buttoons>
      </div>
    </div>
  );
}
