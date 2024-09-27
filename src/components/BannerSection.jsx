import BannerImage from '../assets/images/LogoSemFundo.png'
import BackgroundImage from '../assets/images/contabilidade-4.0.jpg'
import Mainbutton from './Mainbutton'

function BannerSection(){
  return (  
    <section className="w-full p-4 h-auto bg-[#120f21e0] md:justify-center gap-5 bg-cover md:p-[5rem] md:align-center bg-no-repeat bg-fixed bg-center flex flex-col justify-end md:flex-row" style={{backgroundBlendMode: "darken", backgroundImage: `url(${BackgroundImage})` }}>
        <div className="flex flex-col justify-center gap-5  mt-[33%] md:mt-0 md:w-1/2 h-auto">
        <h1 className="text-[#d8ad5e] text-4xl font-semibold md:text-5xl text-start">Ajudando no crescimento <br />e fortalecimento do seu negócio</h1>
        <p className="text-white tracking-wide">
            Bem-vindo ao seu Escritório de Contabilidade, onde transformamos
            números em oportunidades e tornamos suas finanças mais simples e
            lucrativas do que nunca!
        </p>
        <Mainbutton text="Saiba Mais" link="#contato" />
        </div>
        <img src={BannerImage} className="w-3/4 md:w-[40%] mx-auto md:mx-0"></img>
    </section>
  );
}

export default BannerSection;