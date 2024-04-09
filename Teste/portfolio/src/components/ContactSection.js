
export default function ContactSection() {
  return (
    <form className='contactSection' id="contactSection">

      <div className="left">
        <h3>Entre em contatos</h3>
        <label className="email-label">com_coders@gmail.com</label>
        <label className="phone-label">(+55)11 9523-42046 / (+55)11 99215-9622-</label>
      </div>
     
      <div className="right">
        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Telefone'/>
        <button className="button-49" role="button">Enviar</button>
      </div>
      
      

      
      
    </form>


  );
}