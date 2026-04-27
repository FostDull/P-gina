import { useState } from 'react';
import Buttoons from './Buttoons';

export default function App1({ setOption }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleSum = (e) => {
    e.preventDefault();
    if (num1 === "" || num2 === "") return;
    const res = Number(num1) + Number(num2);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header section with back button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">Basic Calculator</h1>
            <p className="mt-1 text-base text-gray-700 font-medium">Sum of two numbers.</p>
          </div>
          <Buttoons variant="back" onClick={() => setOption(false)}>
            ← Back
          </Buttoons>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-lg mx-auto">
          <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSum} className="space-y-5">
              
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1.5">Number 1</label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm bg-gray-50 text-gray-900 text-base font-medium"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  placeholder="Enter first number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1.5">Number 2</label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm bg-gray-50 text-gray-900 text-base font-medium"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                  placeholder="Enter second number"
                />
              </div>

              <Buttoons variant="calculate" type="submit">
                Calculate Sum
              </Buttoons>
            </form>

            {result !== null && (
              <div className="mt-6 p-5 bg-indigo-50 rounded-xl border border-indigo-100 text-center animate-fade-in-up">
                <p className="text-xs text-indigo-700 font-bold uppercase tracking-wider mb-1">Result</p>
                <p className="text-4xl font-black text-indigo-900">{result}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}