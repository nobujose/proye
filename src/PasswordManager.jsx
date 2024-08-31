import React, { useState } from 'react';  

const PasswordManager = () => {  
  const [currentPassword, setCurrentPassword] = useState('');  
  const [newPassword, setNewPassword] = useState('');  
  const [confirmPassword, setConfirmPassword] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Aquí puedes agregar la lógica para actualizar la contraseña  
  };  

  return (  
    <div >  
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">  
        <div className="mb-4">  
          <label className="block text-gray-700 font-bold mb-2" htmlFor="current-password">  
            Contraseña actual  
          </label>  
          <input  
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
            id="current-password"  
            type="password"  
            placeholder="Ingrese la contraseña actual"  
            value={currentPassword}  
            onChange={(e) => setCurrentPassword(e.target.value)}  
          />  
        </div>  
        <div className="mb-4">  
          <label className="block text-gray-700 font-bold mb-2" htmlFor="new-password">  
            Nueva contraseña  
          </label>  
          <input  
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
            id="new-password"  
            type="password"  
            placeholder="Ingrese la nueva contraseña"  
            value={newPassword}  
            onChange={(e) => setNewPassword(e.target.value)}  
          />  
        </div>  
        <div className="mb-6">  
          <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">  
            Confirmar contraseña  
          </label>  
          <input  
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
            id="confirm-password"  
            type="password"  
            placeholder="Ingrese la nueva contraseña"  
            value={confirmPassword}  
            onChange={(e) => setConfirmPassword(e.target.value)}  
          />  
        </div>  
        <div className="flex items-center justify-between">  
          <button  
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
            type="submit"  
          >  
            Guardar  
          </button>  
        </div>  
      </form>  
    </div>  
  );  
};  

export default PasswordManager;