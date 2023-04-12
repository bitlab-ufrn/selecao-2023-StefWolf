import { useEffect, useState } from 'react'
import { detectBadWord } from './components/DetectBadWord'
import { BiSearchAlt } from "react-icons/bi";
import ShowAlert from './components/ShowAlert';
import translate from 'translate';

function App() {

  const [text, setText] = useState("")
  const [hasBadWord, setHadBadWord] = useState()
  const [language, setLanguage] = useState("pt")
  const [placeholder, setPlaceholder] = useState("Digite o texto")

  const handleLetterTranslator =  async function tradutor(text, language){
    translate.engine= "google";
    return await translate(text, {to: language});
  }

  const handleLetterTranslatorPortuguese =  async function tradutor(text){
    translate.engine= "google";
    return await translate(text, {to: "pt"});
  }

  async function verifyWords(e) {
    e.preventDefault()
  
    if(language != "pt")
     setText(await handleLetterTranslatorPortuguese(text))
    
    setHadBadWord(await detectBadWord(text))
  }

  useEffect(() => {
    async function modifyPlaceholder(){
      if(language != "pt"){
        setPlaceholder(await handleLetterTranslator(placeholder, language))
        console.log(placeholder)
      }
    }
    modifyPlaceholder()
  })

  
  return (
    <body className='body'>
      <h1>Search Bad Words...</h1>
      <form onSubmit={verifyWords} className='form'>
        <input className='form__input' placeholder={placeholder} id='text' type='text' name='text'
          icon={<BiSearchAlt size={25} />} onChange={(e) => setText(e.target.value)} required/>
          <div className='flex justify-between mt-5'>
            <select className='form__select' id="language" name="language" onChange={(e) => setLanguage(e.target.value)}>
                <option value="pt" selected>Português</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
            </select>
            <button className='form__button' type='submit'>Verificar</button>
          </div>
      </form>

      <div className='laptop:w-[44%] w-[90%] mt-12'>
        <ShowAlert status={hasBadWord} />
      </div>

    </body>
  )
}

export default App
