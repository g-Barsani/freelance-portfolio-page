import logo from './logo.png';

export default function TopSection() {
  return (
    <header>
      <div className="header">
        <div className="left">
          <img className='logo' src={logo} alt="Logo" />
        </div>

        <div className="right">
          {/* Âncoras para IDs */}
          <a href="#content">Início</a>
          <a href="#carroussel">Projetos</a>
          <a href="#technologySection">Habilidades</a>
          <a href="#contactSection">Contato</a>
        </div>
      </div>

      <div className="content" id="content">
        <div className="upperContent"></div>
        <div className="bottomContent"></div>
      </div>
    

    <div className="hero">
    <h1>{'<Com_Coders/>'}</h1>


      <p>
        A Equipe Com_Coders é composta por profissionais de T.I especializados na criação de sites e aplicações web. Nosso objetivo é oferecer soluções inovadoras e funcionais para nossos clientes, garantindo
      </p>
    </div>


    {/* fim */}
    </header>
  );
}