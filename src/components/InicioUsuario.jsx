
import React, { useState } from 'react';

export const InicioUsuario = () => {


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
  return (


    <div className="bg-gray-100 min-h-screen flex flex-col">  
        
      <main className="flex-grow p-6">  
        <div className="bg-white shadow-md rounded-lg p-6">  
          <h3 className="text-xl font-semibold mb-4">Saldo disponible</h3>  
          <p className="text-4xl font-bold text-[#085f63] mb-8">5.184,67 bolívares</p>  
          <div className="mb-4">  
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
      </main>  
    </div>  
  )
}


