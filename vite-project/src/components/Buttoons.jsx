import React from 'react';

export default function Buttoons({ 
  onClick, 
  children, 
  variant = 'primary', 
  className = '',
  type = 'button',
  ...props
}) {
  let baseStyles = "transition-all duration-300 focus:outline-none ";
  
  switch (variant) {
    // Menu variants
    case 'menu-1':
      baseStyles += "w-full py-2.5 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 ";
      break;
    case 'menu-2':
      baseStyles += "w-full py-2.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:ring-4 focus:ring-emerald-300 ";
      break;
    case 'menu-3':
      baseStyles += "w-full py-2.5 px-5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:ring-4 focus:ring-purple-300 ";
      break;
      
    // Navigation / Back button
    case 'back':
      baseStyles += "px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 shadow-sm font-medium focus:ring-2 focus:ring-gray-200 text-sm ";
      break;

    // App1 variants
    case 'calculate':
      baseStyles += "w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-4 focus:ring-indigo-300 ";
      break;

    // App3 Modal variants
    case 'modal-close-icon':
      baseStyles += "absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 backdrop-blur-sm ";
      break;
    case 'modal-primary':
      baseStyles += "flex-1 bg-indigo-600 text-white py-2.5 px-5 rounded-xl font-semibold text-sm shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex justify-center items-center gap-2 ";
      break;
    case 'modal-secondary':
      baseStyles += "flex-1 bg-gray-100 text-gray-700 py-2.5 px-5 rounded-xl font-semibold text-sm hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ";
      break;
    case 'modal-success':
      baseStyles += "flex-1 bg-emerald-500 text-white py-2.5 px-5 rounded-xl font-semibold text-sm shadow-md hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 ";
      break;

    // Calculator variants
    case 'calc-operator':
      baseStyles += "bg-emerald-500 hover:bg-emerald-600 font-bold text-white text-xl py-3 rounded-2xl shadow ";
      break;
    case 'calc-clear':
      baseStyles += "bg-red-500 hover:bg-red-600 font-bold text-white text-lg py-3 rounded-2xl shadow ";
      break;
    case 'calc-equal':
      baseStyles += "bg-blue-500 hover:bg-blue-600 font-bold text-white text-xl py-3 rounded-2xl shadow ";
      break;
    case 'calc-digit':
      baseStyles += "bg-gray-700 hover:bg-gray-600 text-white font-medium text-lg py-3 rounded-2xl shadow ";
      break;

    // Default
    case 'primary':
    default:
      baseStyles += "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow ";
      break;
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
