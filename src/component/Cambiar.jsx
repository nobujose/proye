import logo from'./assets/img/logobanco.png';
import React, { useState } from 'react';
export function Cambiar() {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
    
        if (formData.newPassword !== formData.confirmPassword) {
          setError('Las contraseñas no coinciden');
          return;
        }
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(formData.newPassword)) {
          setError('La contraseña debe contener al menos una mayúscula, un número y un carácter especial');
          return;
        }
    
        // Here you would typically send the password change request to your backend
        console.log('Password change submitted:', formData);
      };
    

    return(
        <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <img src= {logo } class="object-fill h-10 w-40 ..."/>
      <h2 className="text-2xl font-bold mb-6">Cambiar contraseña</h2>
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
            <a href="#" className="block px-4 py-2  text-white hover:bg-[#0a7a7f]">
              Directorio
            </a>
            <a href="#" className="block px-4 py-2 bg-[#4fbdba] text-white hover:bg-[#0a7a7f]">
              Cambiar contraseña
            </a>
          </nav>
        </div>
        <main className="flex-1 p-8">
        <header className="flex justify-between mb-8">
          
          
        </header>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
         
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Contraseña actual</label>
              <input
                type="password"
                name="currentPassword"
                className="w-full p-2 border rounded"
                placeholder="Ingrese la contraseña actual"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Nueva contraseña</label>
              <input
                type="password"
                name="newPassword"
                className="w-full p-2 border rounded"
                placeholder="Ingrese la nueva contraseña"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 border rounded"
                placeholder="Ingrese la nueva contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            {error && <p className="text-red-500">{error}</p>}
            
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