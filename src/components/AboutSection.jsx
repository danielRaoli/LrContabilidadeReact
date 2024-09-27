
import sobrefoto from '../assets/images/sobrefoto.jpg'
import { useInView } from 'react-intersection-observer';
function AboutSection(){

    const {ref: aboutSection , inView: aboutSectionVisible} = useInView();



    return (
        <section id='about' ref={aboutSection} className={ aboutSectionVisible ? 'w-full p-4 h-auto flex-col md:p-[5rem] transition duration-300 delay-100 opacity-1' : 'w-full p-4 h-auto flex-col md:p-[5rem] opacity-0'  }>
                <h2 className='text-3xl text-[#1e293b] text-center mb-8'>Sobre</h2>
                <div className='flex flex-col  md:justify-center h-auto gap-5 text-[#1e293b] md:flex-row'>
                    <p className='md:w-[40%]'>
                    Lucas Rodrigues é graduado em Ciências Contábeis pela UNIFACS - Universidade Salvador, com conclusão em 2022,
                    mas sua atuação na área teve início em 2020. Ao longo de sua trajetória, Lucas tem se destacado pelo atendimento
                    humanizado e personalizado, sempre buscando compreender as necessidades e desafios específicos de cada cliente. Com uma
                    abordagem consultiva, ele trabalha para oferecer soluções contábeis claras e eficazes, que não apenas solucionam problemas 
                    imediatos, mas também contribuem 
                    diretamente para o crescimento sustentável e fortalecimento das empresas que atende.
                    </p>
                    <img className='rounded max-w-[750%] md:w-[40%]' src={sobrefoto} alt="" />
                </div>
      </section>
    );
}

export default AboutSection;