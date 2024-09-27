import {BookUser, User} from 'lucide-react'
import CardPopularService from './CardPopularService';
import { useInView } from 'react-intersection-observer';

function PopularServicesSection(){
    const {ref: serviceSection , inView: serviceSectionIsVisible} = useInView();
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
    
return (
    <section id='service' ref={serviceSection} className={`w-full transition duration-700 delay-300 bg-white h-auto flex-col py-5  ${serviceSectionIsVisible ? 'opacity-1' : 'opacity-0' } `} >
    <header className='h-auto p-5 bg-blue-950 mb-8'>
             <h2 className='text-3xl text-[#d8ad5e] text-center'>Serviços Populares</h2>
    </header>
    <div className='flex flex-wrap justify-center h-auto p-4  gap-5 text-[#1e293b]'>
        {popularServices.map((service) => (
            <CardPopularService services={service.services} title={service.title} icon={service.icon} />
        ))}
    </div>
</section>
)
}

export default PopularServicesSection;