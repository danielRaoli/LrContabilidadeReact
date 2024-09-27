import logoImage from '../assets/images/logo.png'
function MainHeader(){

    const links = [
        {
            text:'Serviços',
            link: 'service'
        },
        {text:'Sobre',
         link: 'about'   
        },
       {text: 'Contato',
        link: 'contato'
       }
      ]

    return(
        <header className="w-full h-70 p-3 absolute mt-4">
        <nav className='flex items-center gap-4 justify-center'>
          <img src={logoImage} className='h-[40px]' alt="" />
          <ul className="flex  gap-4 justify-center  bg-transparent font-bold">
            {links.map((link) => (
              <li key={link.text} className="hover:-translate-y-1 transition text-[#d8ad5e]"><a href={`#${link.link}`}>{link.text}</a></li>
            ))}
          </ul>
        </nav>
      </header>
    );
}

export default MainHeader