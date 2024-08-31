import logo from'../assets/img/logobanco.png';

const EnReguistro = () => {
  return (
    <>
    {/* Header */}
    <header className="bg-white  p-4 flex justify-between items-center">
    <img src={logo} alt="Banco Universitario" className="h-8" /> 
    <button className="bg-[#085f63] text-white px-4 py-2 rounded">
          Salir
        </button>
      </header>
    </>
  )
}

export default EnReguistro
