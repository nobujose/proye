import logo from'./assets/img/logobanco.png';
import React, { useState } from 'react';
export function AgregarD() {

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

    return(
        
    <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <img src= {logo } class="object-fill h-10 w-40 ..."/>
        <h1 className="text-2xl font-bold">Agregar Contactos </h1>
        <button className="bg-[#085f63] text-white px-4 py-2 rounded">
          Salir
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        
          
        <div className="w-64 bg-[#085f63] text-white">
          
          <nav className="mt-8">
            <a href="#" className="block px-4 py-2  text-white hover:bg-[#0a7a7f]">
              Inicio
            </a>
            <a href="#" className="block px-4 py-2  text-white">
              Mi cuenta
            </a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-[#0a7a7f]">
              Transferencia
            </a>
            <a href="#" className="block px-4 py-2 bg-[#4fbdba] text-white hover:bg-[#0a7a7f]">
              Directorio
            </a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-[#0a7a7f]">
              Cambiar contraseña
            </a>
          </nav>
        </div>
        <main className="flex-1 p-8">
        
        
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
        </div>
        

       

        
        

      {/* Footer */}
      <footer className="bg-[#085f63] text-white p-4 text-center">
        © 2023 Banco Universitario. Todos los derechos reservados.
      </footer>
    </div>
  


    );
}