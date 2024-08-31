import React, { useState } from 'react';

const TransferConfirmation = () => {
  const [showReport, setShowReport] = useState(false);
  const [transferData, setTransferData] = useState({
    name: 'jose asuaje',
    documentId: '28931672',
    accountNumber: '345678901234567890',
    amount: ''
  });

  const handleTransfer = () => {
    if (transferData.amount) {
      setShowReport(true);
    } else {
      alert('Por favor, ingrese la cantidad a transferir.');
    }
  };

  const handleConfirm = () => {
    // Here you would typically send the transfer data to your backend
    console.log('Transfer confirmed:', transferData);
    setShowReport(false);
    // Reset amount after confirmation
    setTransferData({ ...transferData, amount: '' });
  };

  const handleCancel = () => {
    setShowReport(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-['Montserrat']">
      <aside className="w-64 bg-[#085f63] text-white p-6">
        <nav>
          <ul className="space-y-2">
            <li>Inicio</li>
            <li>Mi cuenta</li>
            <li className="bg-[#064e52] p-2">Transferencia</li>
            <li>Directorio</li>
            <li>Cambiar contraseña</li>
          </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-8">
        <header className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#085f63]">transferencia</h1>
          <button className="bg-[#085f63] text-white px-4 py-2 rounded">Salir</button>
        </header>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-[#085f63]">Realizar transferencia</h2>
          
          <div className="mb-6">
            <h3 className="text-lg mb-2">Saldo disponible</h3>
            <p className="text-3xl font-bold text-[#085f63]">5.184,67 bolívares</p>
          </div>
          
          {!showReport ? (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Nombre</label>
                  <input type="text" value={transferData.name} readOnly className="w-full p-2 border rounded bg-gray-100" />
                </div>
                <div>
                  <label className="block mb-1">Documento de identidad</label>
                  <input type="text" value={transferData.documentId} readOnly className="w-full p-2 border rounded bg-gray-100" />
                </div>
              </div>
              <div>
                <label className="block mb-1">Número de cuenta</label>
                <input type="text" value={transferData.accountNumber} readOnly className="w-full p-2 border rounded bg-gray-100" />
              </div>
              <div>
                <label className="block mb-1">Cantidad</label>
                <input 
                  type="number" 
                  placeholder="Ingrese la cantidad" 
                  value={transferData.amount}
                  onChange={(e) => setTransferData({...transferData, amount: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Volver</button>
                <button type="button" onClick={handleTransfer} className="bg-[#085f63] text-white px-4 py-2 rounded">Transferir</button>
              </div>
            </form>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Confirmar transferencia</h3>
              <p><strong>Nombre:</strong> {transferData.name}</p>
              <p><strong>Documento de identidad:</strong> {transferData.documentId}</p>
              <p><strong>Número de cuenta:</strong> {transferData.accountNumber}</p>
              <p><strong>Monto a transferir:</strong> {transferData.amount} bolívares</p>
              <div className="mt-6 flex justify-end space-x-4">
                <button onClick={handleCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancelar</button>
                <button onClick={handleConfirm} className="bg-[#085f63] text-white px-4 py-2 rounded">Confirmar</button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <button className="fixed top-4 right-4 bg-[#085f63] text-white px-4 py-2 rounded">
        Mostrar contactos
      </button>
      
      <footer className="bg-[#085f63] text-white p-4 absolute bottom-0 w-full text-center font-['Montserrat']">
        © 2023 Banco Universitario. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default TransferConfirmation;