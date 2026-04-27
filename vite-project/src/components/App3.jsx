import { useState } from 'react';
import Buttoons from './Buttoons';

export default function App3({ setOption3 }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Make data stateful to allow editing
  const [data, setData] = useState([
    { id: 1, title: 'Premium Plan', description: 'Unlock all features with our premium subscription.', price: '$99/mo', color: 'from-purple-500 to-indigo-600' },
    { id: 2, title: 'Starter Kit', description: 'Perfect for beginners looking to get started quickly.', price: '$29/mo', color: 'from-emerald-400 to-teal-500' },
    { id: 3, title: 'Enterprise Solutions', description: 'Tailored solutions for large scale organizations.', price: 'Custom', color: 'from-slate-700 to-slate-900' },
    { id: 4, title: 'Consulting Services', description: 'Expert advice to boost your business growth.', price: '$150/hr', color: 'from-orange-400 to-rose-500' },
    { id: 5, title: 'Pro Developer', description: 'Advanced tools and APIs for professional developers.', price: '$49/mo', color: 'from-cyan-400 to-blue-500' },
    { id: 6, title: 'Cloud Hosting', description: 'Secure and scalable cloud infrastructure.', price: '$15/mo', color: 'from-sky-400 to-indigo-500' },
    { id: 7, title: 'Marketing Bundle', description: 'Everything you need to run successful campaigns.', price: '$79/mo', color: 'from-pink-500 to-rose-500' },
    { id: 8, title: 'SEO Optimizer', description: 'Boost your rankings and get more organic traffic.', price: '$39/mo', color: 'from-amber-400 to-orange-500' },
  ]);

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelected(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setData(prevData => prevData.map(item => item.id === selected.id ? selected : item));
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setSelected(null);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with back button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">Our Services</h1>
            <p className="mt-1 text-base text-gray-700 font-medium">Explore what we have to offer.</p>
          </div>
          <Buttoons variant="back" onClick={() => setOption3(false)}>
            ← Back
          </Buttoons>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search services or products..."
            className="w-full pl-11 pr-4 py-3.5 border-0 rounded-2xl shadow-sm text-gray-800 bg-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-base transition-shadow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards Grid (2 rows of 4 when xl) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(item => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div 
                className={`h-36 bg-gradient-to-br ${item.color} relative overflow-hidden cursor-pointer`}
                onClick={() => setSelected(item)}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/25 text-white backdrop-blur-sm border border-white/40 shadow-sm">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col cursor-pointer" onClick={() => setSelected(item)}>
                <h2 className="text-lg font-bold text-black group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm flex-1 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:text-indigo-700">
                    <span>View details</span>
                    <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
             <div className="col-span-full text-center py-12">
               <p className="text-gray-600 text-base">No results found for "{search}"</p>
             </div>
          )}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
              onClick={handleCloseModal}
            ></div>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full relative z-10 transform transition-all scale-100 flex flex-col max-h-[90vh]">
              <div className={`h-20 sm:h-28 bg-gradient-to-br ${selected.color} relative shrink-0`}>
                <Buttoons variant="modal-close-icon" onClick={handleCloseModal}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Buttoons>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                {isEditing ? (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1">Title</label>
                      <input 
                        type="text" 
                        name="title" 
                        value={selected.title} 
                        onChange={handleEditChange}
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1">Price</label>
                      <input 
                        type="text" 
                        name="price" 
                        value={selected.price} 
                        onChange={handleEditChange}
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1">Description</label>
                      <textarea 
                        name="description" 
                        value={selected.description} 
                        onChange={handleEditChange}
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none text-gray-900"
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h2 className="text-2xl font-bold text-black leading-tight">{selected.title}</h2>
                      <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 whitespace-nowrap">
                        {selected.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                      {selected.description}
                    </p>
                  </>
                )}

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {isEditing ? (
                    <Buttoons variant="modal-success" onClick={handleSave}>
                      Save Changes
                    </Buttoons>
                  ) : (
                    <Buttoons variant="modal-primary" onClick={() => setIsEditing(true)}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit Info
                    </Buttoons>
                  )}
                  <Buttoons variant="modal-secondary" onClick={handleCloseModal}>
                    Close
                  </Buttoons>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}