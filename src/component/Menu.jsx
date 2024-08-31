import React from 'react';  

export function Menu() {  
  return (  
    <>
     {/* Sidebar */}
        
          
     <div className="w-64 bg-[#085f63] text-white">
          
          <nav className="mt-8">
            <a href="#" className="block px-4 py-2 bg-[#4fbdba] text-white hover:bg-[#0a7a7f]">
              Inicio
            </a>
            <a href="#" className="block px-4 py-2  text-white hover:bg-[#0a7a7f]">
              Mi cuenta
            </a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-[#0a7a7f]">
              Transferencia
            </a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-[#0a7a7f]">
              Directorio
            </a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-[#0a7a7f]">
              Cambiar contraseña
            </a>
          </nav>
        </div>
    </>
  );  
}