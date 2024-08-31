import { Pie } from "../Pie";
import EnReguistro from "./EnReguistro";

export function InicioS(){

    return (
      
      <div className="flex flex-col min-h-screen bg-white">
        <EnReguistro/>
      
      <div className="flex-grow flex flex-col items-center justify-center">
      
        <div className="w-full max-w-md">
          
          
          
          <div className="bg-[#085f63] p-8 rounded-lg shadow-md">
            <h2 className="text-white text-2xl font-['Montserrat_Alternates'] mb-6 text-center">
              ¡Bienvenido a Banco Universitario!
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-2 rounded font-['Montserrat_Alternates']"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full p-2 rounded font-['Montserrat_Alternates']"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-white text-[#085f63] px-4 py-2 rounded font-['Montserrat_Alternates']"
                >
                  Registrarse
                </button>
                <button
                  type="button"
                  className="bg-white text-[#085f63] px-4 py-2 rounded font-['Montserrat_Alternates']"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Pie/>
    </div>
      );
}