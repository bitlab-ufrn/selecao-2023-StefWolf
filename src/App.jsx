import { useState } from 'react'

import { detectBadWord } from './components/DetectBadWord'

function App() {

  let result = detectBadWord("caralho")
  console.log(result)

  return (
    <div className="App">
      Hello world
    </div>
  )
}

export default App
