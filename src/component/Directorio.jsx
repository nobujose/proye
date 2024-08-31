import logo from'./assets/img/logobanco.png';
export function Directorio() {
    const contacts = Array(7).fill({
        alias: 'Jose Asuaje',
        accountNumber: '12345678912345678911',
        description: 'Comedor Universitario'
      });

    return(
        <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <img src= {logo } class="object-fill h-10 w-40 ..."/>
      <h2 className="text-2xl font-bold mb-6">Directorio de contactos</h2>
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
         {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
       
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Alias</th>
              <th className="pb-2">Número de cuenta</th>
              <th className="pb-2">Descripción</th>
              <th className="pb-2"></th>
              
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-b">
                <td className="py-3">{contact.alias}</td>
                <td>{contact.accountNumber}</td>
                <td>{contact.description}</td>
                <td className="flex justify-end space-x-2">
                  <button className="bg-[#085f63] text-white px-3 py-1 rounded">
                    Editar
                  </button>
                  <button className="bg-[#085f63] text-white px-3 py-1 rounded">
                    Transferir
                  </button>
                  <button type="button"
                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                    Eliminar
                  </button>
                </td>
                
              </tr>
              
              
            ))}
            <div className="flex justify-between relative h-10 w-30 left-39 ">
              
              <button type="submit" className="bg-[#085f63] text-white px-4 py-2 rounded ">Agregar</button>
            </div>

           
          </tbody>
        </table>
      </div>
    
       

        
        
      </div>

      {/* Footer */}
      <footer className="bg-[#085f63] text-white p-4 text-center">
        © 2023 Banco Universitario. Todos los derechos reservados.
      </footer>
    </div>
  


    );
}