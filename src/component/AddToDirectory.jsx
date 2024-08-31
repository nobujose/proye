import React, { useState } from 'react';

export function AddToDirectory(){
  const [formData, setFormData] = useState({
    accountNumber: '',
    idDocument: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ accountNumber: '', idDocument: '', name: '' });
  };

  return (
    <div className="flex h-screen bg-gray-100 font-['Montserrat']">
      <aside className="w-64 bg-[#085f63] text-white p-6">
        <nav>
          <ul className="space-y-2">
            <li>Inicio</li>
            <li>Mi cuenta</li>
            <li>Transferencia</li>
            <li className="bg-[#064e52] p-2">Directorio</li>
            <li>Cambiar contraseña</li>
          </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-8">
        <header className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#085f63]">Agregar al directorio</h1>
          <button className="bg-[#085f63] text-white px-4 py-2 rounded">Salir</button>
        </header>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Número de cuenta</label>
              <input
                type="text"
                name="accountNumber"
                className="w-full p-2 border rounded"
                placeholder="Ingrese el número de cuenta"
                value={formData.accountNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">descripcion</label>
              <input
                type="text"
                name="idDocument"
                className="w-full p-2 border rounded"
                placeholder="Ingrese el documento de identidad"
                value={formData.idDocument}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Alias</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Ingrese el nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1">ID</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Ingrese el nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="bg-[#085f63] text-white px-4 py-2 rounded">
              Guardar
            </button>
          </form>
        </div>
      </main>
      
      <footer className="bg-[#085f63] text-white p-4 absolute bottom-0 w-full text-center">
        © 2023 Banco Universitario. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AddToDirectory;