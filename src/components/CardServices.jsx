

function CardService({title, icon: Icon,description }){
    return (
        <div key={title} className=' flex flex-col transition duration-700 hover:-translate-y-3 items-center p-8 gap-2 w-auto md:flex-1 bg-white rounded shadow-lg'>
            <Icon color='#fcd34d' size={60} />

            <h3 className='text-2xl font-semibold text-center'>{title}</h3>

            <p className='text-center'>{description}</p>
         </div>
    );
}

export default CardService;