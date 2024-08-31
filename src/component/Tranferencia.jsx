import logo from'./assets/img/logobanco.png';
import React, { useState } from 'react';
export function Transferencia() {
    const [showContacts, setShowContacts] = useState(false);
  const [formData, setFormData] = useState({
    name: 'jose asuaje',
    documentId: '28931672',
    accountNumber: '345678901234567890',
    amount: ''
  });

  const contacts = [
    { name: 'María González', alias: 'Mari', accountNumber: '123456789012345678' },
    { name: 'Carlos Rodríguez', alias: 'Carlitos', accountNumber: '987654321098765432' },
    { name: 'Ana Martínez', alias: 'Anita', accountNumber: '456789012345678901' },
  ];

  const handleTransfer = (contact) => {
    setFormData({
      ...formData,
      name: contact.name,
      accountNumber: contact.accountNumber,
      amount: ''
    });
    setShowContacts(false);
  };

  

    return(
        <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <img src= {logo } class="object-fill h-10 w-40 ..."/>
        <h2 className="text-2xl font-bold">transferencia</h2>
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
            <a href="#" className="block px-4 py-2 bg-[#4fbdba] text-white hover:bg-[#0a7a7f]">
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
       

        {/* Main content */}
        <div className="flex-1 p-8 bg-white overflow-auto">
        <main className="flex-1 p-8">
        <header className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#085f63]">transferencia</h1>
          <button 
        onClick={() => setShowContacts(true)}
        className="fixed top-15 right-4 bg-[#085f63] text-white px-4 py-2 rounded"
      >
        Mostrar contactos
      </button>
        </header>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-[#085f63]">Realizar transferencia</h2>
          
          <div className="mb-6">
            <h3 className="text-lg mb-2">Saldo disponible</h3>
            <p className="text-3xl font-bold text-[#085f63]">5.184,67 Bs</p>
          </div>
          
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={formData.name} 
                  readOnly 
                />
              </div>
              <div>
                <label className="block mb-2">IDENTIFICACION</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={formData.documentId} 
                  readOnly 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2">Número de cuenta</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={formData.accountNumber} 
                readOnly 
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2">Cantidad</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Ingrese la cantidad" 
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
              />
            </div>
            
            <div className="flex justify-between">
              <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Volver</button>
              <button type="submit" className="bg-[#085f63] text-white px-4 py-2 rounded">Transferir</button>
            </div>
          </form>
        </div>
      </main>
          
        
        </div>
        
        </div>
        {showContacts && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Contactos guardados</h2>
            <ul className="divide-y divide-gray-200">
              {contacts.map((contact, index) => (
                <li key={index} className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.alias}</p>
                  </div>
                  <button 
                    onClick={() => handleTransfer(contact)}
                    className="bg-[#085f63] text-white px-3 py-1 rounded text-sm"
                  >
                    Transferir
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setShowContacts(false)}
              className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded w-full"
            >

              Cerrar
            </button>
          </div>
        </div>
      )}
      

      {/* Footer */}
      <footer className="bg-[#085f63] text-white p-4 text-center">
        © 2023 Banco Universitario. Todos los derechos reservados.
      </footer>
    </div>
  


    );
}