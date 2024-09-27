import Mainbutton from "./Mainbutton";
import { useState } from "react";

function FooterForm(){

    const [message, setMessage] = useState('');

    return (
        <div className='max-w-[400px] flex-1'>
            <h3 className='text-[#d8ad5e] text-3xl font-bold mb-4'>Precisando de ajuda para organizar suas finanças? </h3>
            <p className='text-white mb-4'> Deixe uma mensagem inicial entre contato agora mesmo e dê o próximo passo rumo à tranquilidade financeira!</p>
            
            <input placeholder='Olá, boa tarde' value={message} onChange={(event) => setMessage(event.target.value)} className='block w-full rounded-md border-0 p-1  mb-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600' type="text" />
            
            <Mainbutton text="Enviar" link={`https://api.whatsapp.com/send?phone=557491382153&text=${message}`} />
            
      </div>
    );
}


export default FooterForm;