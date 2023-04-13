import { useState } from 'react'
import { detectBadWord } from './DetectBadWord'
import { BiSearchAlt } from "react-icons/bi";
import ShowAlert from './ShowAlert';
import translate from 'translate';


export default function Form(){

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

    return(

        <div className='w-full flex flex-col items-center justify-center'>
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
        </div>
    )
}