import { Link, useLocation } from 'react-router-dom';
import Encabezado from './Encabesado';
import { Pie } from './Pie';




const Nav = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout h-screen w-screen font-['Montserrat_Alternates']">
      <Encabezado/>

      <div className='flex flex-row flex-nowrap'>
        <div className="flex overflow-hidden">
          <div className="w-64 bg-[#085f63] text-white">
            <nav className="mt-8">
              <Link
                to="/prueba"
                className={`block px-4 py-2 text-white ${location.pathname === '/prueba' ? 'bg-[#4fbdba]' : 'hover:bg-[#0a7a7f]'
                  }`}
              >
                Inicio
              </Link>
              <Link
                to="/mi-cuenta"
                className={`block px-4 py-2 text-white ${location.pathname === '/mi-cuenta' ? 'bg-[#4fbdba]' : 'hover:bg-[#0a7a7f]'
                  }`}
              >
                Mi cuenta
              </Link>
              <Link
                to="/transferencia"
                className={`block px-4 py-2 text-white ${location.pathname === '/transferencia' ? 'bg-[#4fbdba]' : 'hover:bg-[#0a7a7f]'
                  }`}
              >
                Transferencia
              </Link>
              <Link
                to="/directorio"
                className={`block px-4 py-2 text-white ${location.pathname === '/directorio' ? 'bg-[#4fbdba]' : 'hover:bg-[#0a7a7f]'
                  }`}
              >
                Directorio
              </Link>
              <Link
                to="/passwordManager"
                className={`block px-4 py-2 text-white ${location.pathname === '/passwordManager' ? 'bg-[#4fbdba]' : 'hover:bg-[#0a7a7f]'
                  }`}
              >
                Cambiar contraseña
              </Link>
            </nav>
          </div>


        </div>

        <div className='flex flex-1 flex-row flex-nowrap items-center justify-center'>
        {{ ...children }}

        </div>
      </div>

     <Pie/>
    </div>
  );
};

export default Nav;