import { useTheme } from './../hooks/useTheme';
import { FaMoon, FaSun } from "react-icons/fa";

export default function ButtonMode() {
    const {theme, setTheme} = useTheme();

    return(
        <>
            {theme === "ligth" ? (
                <button className='bg-black/10 transition-all hover:-bg--background-color hover:-text--text-color p-3 gap-2 text-blue-gray-900 rounded-lg flex' 
                    onClick={()=> setTheme("dark")}>
                    <FaMoon size={20} /><p>Escuro</p>
                </button>) 
                
                :(<button className='bg-black/70 p-3 gap-2 hover:-bg--background-color-l hover:-text--text-color-l transition-all -text--text-color rounded-lg flex' 
                    onClick={()=> setTheme("ligth")}>
                <FaSun size={20} /><p>Claro</p>
                </button>)
            }
        </>
    )
}