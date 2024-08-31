import logo from'./assets/img/logobanco.png';
import React, { useState } from 'react';

export function Home() {
  const [transfers, setTransfers] = useState([
    { date: '2023-07-22', cedula: '25403657', accountNumber: '123456789987412345', amount: -59.28, balance: 5184.67 },
    { date: '2023-07-21', cedula: '18765432', accountNumber: '987654321234567890', amount: 100.00, balance: 5243.95 },
    { date: '2023-07-20', cedula: '30987654', accountNumber: '456789012345678901', amount: -200.00, balance: 5143.95 },
  ]);

  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleDateChange = (e) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  const filterTransfers = () => {
    const filteredTransfers = transfers.filter(transfer => {
      const transferDate = new Date(transfer.date);
      const startDate = dateRange.start ? new Date(dateRange.start) : new Date(0);
      const endDate = dateRange.end ? new Date(dateRange.end) : new Date();
      return transferDate >= startDate && transferDate <= endDate;
    });
    return filteredTransfers.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

    return(

      
        <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <img src= {logo } class="object-fill h-10 w-40 ..."/>
        <h1 className="text-2xl font-bold">Bienvenido, Usuario!</h1>
        <button className="bg-[#085f63] text-white px-4 py-2 rounded">
          Salir
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        
          
        <div className="w-64 bg-[#085f63] text-white">
          
          <nav className="mt-8">
            <a href="#" className="block px-4 py-2 bg-[#4fbdba] text-white hover:bg-[#0a7a7f]">
              Inicio
            </a>
            <a href="#" className="block px-4 py-2  text-white">
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
       

        {/* Main content */}
        <div className="flex-1 p-8 bg-white overflow-auto">
          
           
          <main className="flex-1 p-8">
        
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl mb-4">Saldo disponible</h2>
          <p className="text-4xl font-bold text-[#085f63] mb-8">5.184,67 bolívares</p>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Consultar traferencias</h3>
              <div className="flex space-x-4">
                <input
                  type="date"
                  name="start"
                  value={dateRange.start}
                  onChange={handleDateChange}
                  className="border rounded p-1"
                />
                <input
                  type="date"
                  name="end"
                  value={dateRange.end}
                  onChange={handleDateChange}
                  className="border rounded p-1"
                />
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th>FECHA</th>
                  <th>IDENTIFICACION</th>
                  <th>NÚMERO DE CUENTA</th>
                  <th>MONTO</th>
                  <th>SALDO</th>
                </tr>
              </thead>
              <tbody>
                {filterTransfers().map((transfer, index) => (
                  <tr key={index}>
                    <td>{new Date(transfer.date).toLocaleDateString('es-ES')}</td>
                    <td>{transfer.cedula}</td>
                    <td>{transfer.accountNumber}</td>
                    <td className={transfer.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                      {transfer.amount.toFixed(2)}
                    </td>
                    <td>{transfer.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
            
            
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#085f63] text-white p-4 text-center">
        © 2023 Banco Universitario. Todos los derechos reservados.
        
        
      </footer>
    </div>
  


    );
}