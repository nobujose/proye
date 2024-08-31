

import { Link, useLocation } from 'react-router-dom';
import EnReguistro from "./EnReguistro";
import { Pie } from '../Pie';

export function Reguistro(){
    return (
      <div className="flex flex-col min-h-screen bg-white font-['Montserrat_Alternates']">
        <EnReguistro/>
      

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#085f63] p-8 rounded-lg shadow-md">
          <h2 className="text-white text-2xl mb-6 text-center">
            ¡Bienvenido a Banco Universitario!
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="w-full p-2 rounded"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Número de teléfono"
              className="w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Documento de identidad"
              className="w-full p-2 rounded"
            />
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              className="w-full p-2 rounded"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-white text-[#085f63] px-4 py-2 rounded"
              >
                Guardar
              </button>
              
              <button
                
                type="button"
                className="bg-white text-[#085f63] px-4 py-2 rounded"
              >
                 <Link
                to="/prueba"
                className={` ${location.pathname === '/prueba' ? '' : 'hover:bg-[#0a7a7f]'
                  }`}
              >
                Iniciar sesión
              </Link>
                
              </button>
            </div>
          </form>
        </div>
      </main>

      <Pie/>
    </div>
    );
}