import React from 'react'

export const Datos = () => {
  return (
    <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        
          
        
       

        {/* Main content */}
        <div className="flex-1 p-8 bg-white overflow-auto">
          <main>
          <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Datos de la cuenta</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <p className="text-sm text-[#4fbdba] mb-1">Número de cuenta</p>
                  <p className="text-gray-700">12345678912345678911</p>
                </div>
                <div className="">
                  <p className="text-sm text-[#4fbdba] mb-1">Documento de identidad</p>
                  <p className="text-gray-700">V- 25.403.657</p>
                </div>
                <div className="">
                  <p className="text-sm text-[#4fbdba] mb-1">Nombre y apellido</p>
                  <p className="text-gray-700">jose asuaje</p>
                </div>
                <div className="">
                  <p className="text-sm text-[#4fbdba] mb-1">Correo electrónico</p>
                  <p className="text-gray-700">nobujose6@gmail.com</p>
                </div>
                <div className="">
                  <p className="text-sm text-[#4fbdba] mb-1">Número de teléfono</p>
                  <p className="text-gray-700">+58 412 7726342</p>
                </div>
                <div className="">
                  <p className="text-sm text-[#4fbdba] mb-1">Fecha de nacimiento</p>
                  <p className="text-gray-700">15/01/2000</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  )
}


