import { useState } from 'react'
import { detectBadWord } from './components/DetectBadWord'
import { Alert } from "@material-tailwind/react";
import { BiSearchAlt } from "react-icons/bi";
import ShowAlert from './components/ShowAlert';

function App() {

  const [text, setText] = useState("");
  const [hasBadWord, setHadBadWord] = useState();

  async function verifyWords(e) {
    e.preventDefault()
    setHadBadWord(await detectBadWord(text))
  }

  return (
    <body className='body'>
      <h1>Search Bad Words...</h1>
      <form onSubmit={verifyWords} className='form'>
        <input className='form__input' placeholder="Digite o texto" id='text' type='text' name='text'
          icon={<BiSearchAlt size={25} />} onChange={(e) => setText(e.target.value)} required/>
          <div className='flex justify-end mt-5'>
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
