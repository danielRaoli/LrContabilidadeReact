

function CardPopularService({title,icon : Icon ,services}){
    return (
        <div key={title} className=' flex flex-col items-center gap-2'>
        <Icon color='#fcd34d' size={60} />
       <h3 className='text-2xl'>{title}</h3>
       <ul>
         {services.map((servicename) => (
           <li key={servicename} className='text-center text-black'>{servicename}</li>
         ))}
       </ul>
 </div>
    );
}

export default CardPopularService;