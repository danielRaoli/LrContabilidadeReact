import BannerImage from './assets/images/LogoSemFundo.png'
import logoImage from './assets/images/logo.png'
import BackgroundImage from './assets/images/contabilidade-4.0.jpg'
import sobrefoto from './assets/images/sobrefoto.jpg'
import {User, Scale, Speech, ChartNoAxesCombined, HandCoins} from 'lucide-react'
import {BookUser} from 'lucide-react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
 
  const links = [
    'Serviços',
    'Sobre',
    'Contato'
  ]

  const popularServices = [
    {
      icon: User,
      title: 'Pessoa Física',
      services: [
        'Imposto de renda (IRPF)',
        'Regularização do CPF',
        'Declaração de ITR ',
        'Planejamento financeiro e tributário', 
        'Decore' 
      ]
    },
    {
      icon: BookUser,
      title: 'Pessoa Jurídica',
      services: [
     
        ' MEI' ,
         'Simples Nacional' ,
         'Lucro presumido' ,
         'Constituição, alteração e fusão de empresa' ,
         'Planejamento tributário',  
       ]
    }
  ]

  const othersServices = [
    {
      icon: Scale,
      title: 'Contabilidade Geral',
      description: 'Isso inclui a manutenção de registros financeiros detalhados, como lançamentos contábeis, balanços patrimoniais e demonstrações de resultados. A contabilidade geral é fundamental para entender a saúde financeira de uma empresa.',
    },
    {
      icon: Speech,
      title: 'Auditoria',
      description:'Os escritórios de contabilidade podem realizar auditorias financeiras para verificar a precisão e a conformidade das informações financeiras de uma empresa. Essa prática é importante para empresas de capital aberto e outras que têm requisitos regulatórios específicos.'
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Orçamento e Previsão',
      description:'Eles ajudam as empresas a criar orçamentos detalhados e previsões financeiras para planejar o futuro e avaliar o desempenho financeiro em relação às metas.'
    },
    {
      icon: HandCoins,
      title: 'Imposto de Renda',
      description:'Os escritórios de contabilidade preparam e apresentam declarações fiscais para empresas e indivíduos, garantindo que todas as obrigações fiscais sejam cumpridas de acordo com as leis fiscais locais e federais.'
    }
  ]
  

  return (
    <main className="w-full relative">
      <header className="w-full h-70 p-3 absolute mt-4">
        <nav className='flex items-center gap-4 justify-center'>
          <img src={logoImage} className='h-[40px]' alt="" />
          <ul className="flex  gap-4 justify-center  bg-transparent font-bold">
            {links.map((link) => (
              <li key={link} className="hover:-translate-y-1 transition text-[#d8ad5e]"><a href=" ">{link}</a></li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="w-full p-4 h-auto bg-[#120f21e0] md:justify-center gap-5 bg-cover md:p-[5rem] md:align-center bg-no-repeat bg-fixed bg-center flex flex-col justify-end md:flex-row" style={{backgroundBlendMode: "darken", backgroundImage: `url(${BackgroundImage})` }}>
            <div className="flex flex-col justify-center gap-5  mt-[33%] md:mt-0 md:w-1/2 h-auto">
              <h1 className="text-[#d8ad5e] text-4xl font-semibold md:text-5xl text-start">Ajudando no crescimento <br />e fortalecimento do seu negócio</h1>
              <p className="text-white tracking-wide">
                  Bem-vindo ao seu Escritório de Contabilidade, onde transformamos
                  números em oportunidades e tornamos suas finanças mais simples e
                  lucrativas do que nunca!
              </p>
              <a href="#" className="h-[40px] p-3 flex hover:scale-105 transition duration-300 center items-center text-[#d8ad5e] border border-[#d8ad5e] rounded w-fit">Saiba Mais</a>
            </div>
            <img src={BannerImage} className="w-3/4 md:w-[40%] mx-auto md:mx-0"></img>
      </section>
      <section className='w-full p-4 h-auto flex-col md:p-[5rem]'>
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
      <section className='w-full bg-white h-auto flex-col py-5 '>
            <header className='h-auto p-5 bg-blue-950 mb-8'>
                     <h2 className='text-3xl text-[#d8ad5e] text-center'>Serviços Populares</h2>
            </header>
            <div className='flex flex-wrap justify-center h-auto p-4  gap-5 text-[#1e293b]'>
                {popularServices.map((service) => (
                            <div key={service.title} className=' flex flex-col items-center gap-2'>
                                   <service.icon color='#fcd34d' size={60} />
                                  <h3 className='text-2xl'>{service.title}</h3>
                                  <ul>
                                    {service.services.map((servicename) => (
                                      <li key={servicename} className='text-center text-black'>{servicename}</li>
                                    ))}
                                  </ul>
                            </div>
                ))}
            </div>
      </section>
      <section className='w-full bg-gray-200 h-auto flex-col py-8 md:p-[5rem]'>
          
            <h2 className='text-3xl text-blue-950 text-center mb-8'>Outros Serviços</h2>
           
            <div className='flex flex-wrap justify-center h-auto p-4  gap-8 text-[#1e293b] '>

                {othersServices.map((service) => (
                <div key={service.title} className=' flex flex-col transition duration-700 hover:-translate-y-3 items-center p-8 gap-2 w-auto md:flex-1 bg-white rounded shadow-lg'>
                    <service.icon color='#fcd34d' size={60} />

                    <h3 className='text-2xl font-semibold text-center'>{service.title}</h3>

                    <p className='text-center'>{service.description}</p>
                </div>
                ))}

            </div>
      </section>
      <footer className='bg-blue-950 p-4 flex gap-4 md:p-[5rem] flex-col md:flex-row  md:relative  md:items-start md:justify-center'>
      
            <div className='max-w-[400px] flex-1'>
              <h3 className='text-[#d8ad5e] text-3xl font-bold mb-4'>Precisando de ajuda para organizar suas finanças? </h3>
              <p className='text-white mb-4'> Deixe uma mensagem inicial entre contato agora mesmo e dê o próximo passo rumo à tranquilidade financeira!</p>
              <form action="" className='max-w-[400px] mb-8'>
                <input placeholder='Olá, boa tarde' className='block w-full rounded-md border-0 p-1  mb-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600' type="email" />
                
                <button className="h-[40px] p-3 flex center items-center text-[#d8ad5e] border border-[#d8ad5e] rounded w-fit" type='submit'>Enviar</button>
              
              </form>
            </div>
            <div className='flex flex-col gap-3 justify-center flex-1'>
                <span className='text-white text-center font-semibold'>SOCIAL</span>
                <div className="flex justify-center gap-3">
                <a className='hover:text-[#d8ad5e]' href="https://www.instagram.com/contabilidadelucasrodrigues/"><FaInstagram className='hover:text-[#d8ad5e] transition duration-300 text-white' size={40}   /></a>
               <a className='hover:text-[#d8ad5e] transition duration-300 text-white'  href="https://api.whatsapp.com/message/YNMNAYD2LS54N1?autoload=1&app_absent=0"> <FaWhatsapp   size={40}  />
               </a>
               
                </div>
              </div>
              <div className='flex flex-col gap-3 items-center justify-center  flex-1'>
                <span className='text-white text-center font-semibold'>MENU</span>
                <a href='#' className='text-white hover:text-[#d8ad5e] transition duration-300 text-center'>sobre</a>
                <a href='#' className='text-white hover:text-[#d8ad5e] transition duration-300 text-center'>serviços</a>
                <a href='#' className='text-white hover:text-[#d8ad5e] transition duration-300 text-center'>contato</a>
              </div>

              <span  className='text-white text-center text-xs md:absolute bottom-0'> Web Creator Copyright ©2024</span>
      </footer>
    </main>
  )
}

export default App
