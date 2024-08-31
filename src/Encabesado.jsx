import logo from'./assets/img/logobanco.png';
 



const Encabezado = () => {
  return (
    <>
    {/* Header */}
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <img src={logo} alt="Banco Universitario" className="h-8" /> 
        <h1 className="text-2xl font-bold">Bienvenido, Usuario!</h1>
        <button className="bg-[#085f63] text-white px-4 py-2 rounded">
          Salir
        </button>
      </header>
    </>
  )
}

export default Encabezado





