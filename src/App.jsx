import Footer from './components/Footer';
import Form from './components/Form';
import ButtonMode from './components/ButtonMode';

function App() {
   
  return (
    <body className='body'>
      <div className='w-[90%] laptop:mb-0 mb-7 flex justify-end'>
        <ButtonMode />
      </div>
      <h1>Search Bad Words...</h1>
      <Form />
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
