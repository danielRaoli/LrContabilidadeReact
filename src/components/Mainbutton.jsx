

function Mainbutton({text,link}){

    return (
        <a 
        href={link} 
        className="h-[40px] p-3 flex hover:scale-105 transition duration-300 center items-center text-[#d8ad5e] border border-[#d8ad5e] rounded w-fit">
            {text}
            </a>
    );
} 

export default Mainbutton