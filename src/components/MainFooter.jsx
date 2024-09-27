import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import FooterForm from "./FooterForm";


function MainFooter(){
    return(
        <footer id="contato" className='bg-blue-950 p-4 flex gap-4 md:p-[5rem] flex-col md:flex-row  md:relative  md:items-start md:justify-center'>
            
        <FooterForm />    

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
            <a href='#about' className='text-white hover:text-[#d8ad5e] transition duration-300 text-center'>sobre</a>
            <a href='#service' className='text-white hover:text-[#d8ad5e] transition duration-300 text-center'>serviços</a>
            <a href='#contato' className='text-white hover:text-[#d8ad5e] transition duration-300 text-center'>contato</a>
          </div>

          <span  className='text-white text-center text-xs md:absolute bottom-0'> Web Creator Copyright ©2024</span>
  </footer>
    );
}

export default MainFooter;