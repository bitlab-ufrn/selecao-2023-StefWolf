import { useState } from 'react'
import { detectBadWord, listAllBadWords } from '../services/DetectBadWord'
import ShowAlert from './ShowAlert';
import { handleWordTranslator } from '../services/Translate';

export default function Form(){

    const [text, setText] = useState("")
    const [hasBadWord, setHadBadWord] = useState()
    const [language, setLanguage] = useState("pt")
    const [placeholder, setPlaceholder] = useState("Digite seu texto aqui")
    const [listBadWords, setListBadWords] = useState([])

    async function verifyWords(e) {
        e.preventDefault();
    
        if(language != "en"){
            setHadBadWord(detectBadWord(await handleWordTranslator(language, "en", text)))
            setListBadWords(listAllBadWords(await handleWordTranslator(language, "en", text)))
        } else {
            setHadBadWord(detectBadWord(text))
            setListBadWords(listAllBadWords(text))
        }

        debugger
    }

    /**
     * Quando modificar a linguagem, o placeholder também modificará
     */
    async function handleModifyLanguage(_language){
        if(_language != "pt")
            setPlaceholder(await handleWordTranslator("pt", _language, placeholder))

        if(_language === "pt")
            setPlaceholder("Digite seu texto aqui")
        
        setLanguage(_language)
    }

    return(
        <div className='w-full flex flex-col items-center justify-center'>
            <form onSubmit={verifyWords} className='form'>

                    <input className='form__input' 
                        placeholder={placeholder} id='text' type='text' name='text'
                        onChange={(e) => setText(e.target.value)} 
                        required/>

                <div className='flex justify-between mt-5'>
                    <select className='form__select' id="language" name="language" onChange={(e) => handleModifyLanguage(e.target.value)}>
                        <option value="pt" selected>Português</option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                    </select>
                    <button className='form__button' type='submit'>Verificar</button>
                </div>
            </form>

            <div className='laptop:w-[44%] w-[90%] mt-12'>     
                <ShowAlert status={hasBadWord} amount={listBadWords.length} />
            </div>
        </div>
    )
}