import { useState } from 'react';

export default function App3({ setOption3 }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const data = [
    { id: 1, title: 'Producto 1', description: 'Detalle del producto 1' },
    { id: 2, title: 'Producto 2', description: 'Detalle del producto 2' },
    { id: 3, title: 'Servicio A', description: 'Detalle del servicio A' },
    { id: 4, title: 'Servicio B', description: 'Detalle del servicio B' },
  ];

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-3 mb-6 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid de tarjetas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100"
          >
            {/* Imagen opcional */}
            <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl"></div>

            {/* Contenido */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {item.description}
              </p>

              <button className="mt-4 text-blue-500 text-sm font-semibold hover:underline">
                Ver más →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 w-80 relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-2">{selected.title}</h2>
            <p className="text-gray-600">{selected.description}</p>

            <button
              onClick={() => setOption3(false)}
              className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}