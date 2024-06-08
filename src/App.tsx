import './App.css'
import Titile from './components/title'
import Workspace from './components/workspace/workspace'

function App() {

  return (
    <main className='font-mono flex flex-col items-center gap-10 m-10'>
      <Titile title='Json Mocking' />
      <Workspace />
    </main>
  )
}

export default App
