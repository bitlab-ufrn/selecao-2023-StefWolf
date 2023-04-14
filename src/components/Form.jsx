import { useState } from 'react'
import { detectBadWord } from './DetectBadWord'
import ShowAlert from './ShowAlert';
import translate from 'translate';

export default function Form(){

    const [text, setText] = useState("")
    const [hasBadWord, setHadBadWord] = useState()
    const [language, setLanguage] = useState("pt")
    const [placeholder, setPlaceholder] = useState("Digite seu texto aqui")

    translate.engine = "google"

    const handleLetterTranslator = async function tradutor(previous, current, text){
        return await translate(text, { from: previous, to: current })
    };

    async function verifyWords(e) {
        e.preventDefault();
    
        if(language != "en"){
            setHadBadWord(detectBadWord(await handleLetterTranslator(language, "en", text)))
        } else {
            setHadBadWord(detectBadWord(text))
        }
    }

    async function handleModifyLanguage(_language){
        if(_language != "pt")
            setPlaceholder(await handleLetterTranslator("pt", _language, placeholder))

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
                <ShowAlert status={hasBadWord} />
            </div>
        </div>
    )
}