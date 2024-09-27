import { Scale, Speech, ChartNoAxesCombined, HandCoins} from 'lucide-react'
import CardService from './CardServices';
import { useInView } from 'react-intersection-observer';

function OtherServicesSection(){

    const {ref: serviceSection, inView: serviceSectionIsVisible} = useInView();

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
      
    return(
        <section  ref={serviceSection} className={`w-full bg-gray-200 h-auto transition delay-300 duration-700 flex-col py-8 md:p-[5rem] ${serviceSectionIsVisible ? 'opacity-1' : 'opacity-0'}` }>
          
        <h2 className='text-3xl text-blue-950 text-center mb-8'>Outros Serviços</h2>
       
        <div className={`flex flex-wrap justify-center h-auto p-4 transition delay-400 duration-700 gap-8 text-[#1e293b] ${serviceSectionIsVisible  ? 'translate-y-0 opacity-1' : '-translate-y-32 opacity-0'}`}>

            {othersServices.map((service) => (
                <CardService title={service.title} icon={service.icon} description={service.description}/>
            ))}

        </div>
  </section>
    );
}

export default OtherServicesSection;