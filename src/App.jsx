import { useEffect, useState } from 'react'
import { detectBadWord } from './components/DetectBadWord'
import { BiSearchAlt } from "react-icons/bi";
import ShowAlert from './components/ShowAlert';
import translate from 'translate';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { FaMoon, FaSun } from "react-icons/fa";

function App() {

  const {theme, setTheme} = useTheme();

  const [text, setText] = useState("");
  const [hasBadWord, setHadBadWord] = useState();
  const [language, setLanguage] = useState("pt");
  const [placeholder, setPlaceholder] = useState("Digite o texto");

  translate.engine = "google";

  const handleLetterTranslatorPortuguese = async function tradutor(text){
    return await translate(text, {to: "pt"});
  };

  async function verifyWords(e) {
    e.preventDefault();
  
    if(language !== "pt") {
      setText(await handleLetterTranslatorPortuguese(text));
    }
    setHadBadWord(await detectBadWord(text));
  }

   
  return (
    <body className='body'>
      <div className='w-[90%] laptop:mb-0 mb-7 flex justify-end'>
        {theme === "ligth" ? (
          <button className='bg-black/10 transition-all hover:-bg--background-color hover:-text--text-color p-3 gap-2 text-blue-gray-900 rounded-lg flex' onClick={()=> setTheme("dark")}>
            <FaMoon size={20} /><p>Escuro</p>
          </button>) 
        :(<button className='bg-black/70 p-3 gap-2 hover:-bg--background-color-l hover:-text--text-color-l transition-all -text--text-color rounded-lg flex' onClick={()=> setTheme("ligth")}>
          <FaSun size={20} /><p>Claro</p>
          </button>)
        }
      </div>
      <h1>Search Bad Words...</h1>
      <form onSubmit={verifyWords} className='form'>
        <input className='form__input' placeholder={placeholder} id='text' type='text' name='text'
          icon={<BiSearchAlt size={25} />} onChange={(e) => setText(e.target.value)} required/>
          <div className='flex justify-between mt-5'>
            <select className='form__select' id="language" name="language" onChange={(e) => setLanguage(e.target.value)}>
                <option value="pt" selected>Português</option>
                <option value="">Outro Idioma</option>
            </select>
            <button className='form__button' type='submit'>Verificar</button>
          </div>
      </form>

      <div className='laptop:w-[44%] w-[90%] mt-12'>
        <ShowAlert status={hasBadWord} />
      </div>
      <p className=' dark:-text--text-color -text--text-color-l laptop:w-[50%] w-[80%] mt-5 mb-4'>
        <b>Observação:</b> Algumas mensagens podem conter conteúdo impróprio ou inofensivo, sendo assim, estamos aqui
        para lhe ajudar a verificar esse problemas e garantir uma melhor segurança à política das
        mensagens do seu sistema
      </p>
      <Footer />
    </body>
  )
}

export default App
