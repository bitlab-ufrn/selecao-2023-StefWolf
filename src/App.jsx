import Footer from './components/Footer';
import Form from './components/Form';
import ButtonMode from './components/ButtonMode';
import { BiSearchAlt } from "react-icons/bi";

function App() {
   
  return (
    <body>
      <main className='body'>
        <div className='w-[90%] flex justify-end'>
          <ButtonMode />
        </div>
        <h1>
          <BiSearchAlt size={40} />Search Bad Words...
        </h1>
        <Form />
        <p className='text'>
          <b>Observação:</b> Algumas mensagens podem conter conteúdo impróprio ou inofensivo, sendo assim, estamos aqui
          para lhe ajudar a verificar esse problemas e garantir uma melhor segurança à política das
          mensagens do seu sistema
        </p>
        <Footer />
      </main>
    </body>
    
  )
}

export default App
