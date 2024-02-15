import './App.css'
import ConcluirTarefa from './assets/paginas/concluirTarefa/ConcluirTarefa'
import Home from './assets/paginas/home/Home'
import Contador from './assets/paginas/contador/Contador'

function App() {
 
  return (
    <>
      <Home titulo="Esse é um componente com props"
      texto="Agora já estamos trabalhando com props - componente chamado com sucesso"/>

      <Home titulo="Agora estamos testando"
      texto="Esse é um texto para comprovar a teoria do props"/> 

      <Contador />

      <ConcluirTarefa />
    </>
  )
}

export default App
