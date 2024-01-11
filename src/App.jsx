import './App.css'
import Calender from './components/Calender'
import Header from './components/Header'
import Header2 from './components/Header2'

function App() {
  

  return (
    <>
  <div className='maindiv'>
    <div className='leftSidebar'>
      <Header/>
  </div>
    <div> <Calender/></div>
    <div><Header2/></div>
    </div>
    </>
  )
}

export default App
