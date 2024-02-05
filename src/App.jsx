import './App.css'
import reactLogo from './assets/react.svg'
function App() {

  return (
    <>
      <div className='reactExpressHeader'>
        <h1>React Express</h1>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>      
      <div className='reactExpressPanel'>
        <div className="reactExpressPanelItems"><p>Teoría</p></div>
        <div className="reactExpressPanelItems"><p>Herramientas</p></div>
        <div className="reactExpressPanelItems"><p>Código</p></div>
      </div>
    </>
  )
}

export default App
