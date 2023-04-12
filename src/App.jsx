import { useState } from 'react'
import { detectBadWord } from './components/DetectBadWord'

function App() {

  const [text, setText] = useState("");
  const [hasBadWord, setHadBadWord] = useState();

  async function verifyWords(e) {
    e.preventDefault()
    setHadBadWord(await detectBadWord(text))
  }

  return (
    <body>
      <form onSubmit={verifyWords} className='form'>
        <label className='form__label'>Digite a palavra</label>
        <input className='form__input' id='text' type='text' name='text' 
          onChange={(e) => setText(e.target.value)} required/>
        <button className='form__button' type='submit'>Verificar</button>
      </form>

      { hasBadWord === true ? 
        <span>Tem palavras impróprias</span>
       : hasBadWord === false ? <span>Não tem palavras impróprias</span> : 
        <></>
      }

    </body>
  )
}

export default App
