import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import Services from './components/Services'

function App() {

  return (
    <>    
        <Routes>
          <Route path = '/' element = {<Home />} />
          {/* <Route paath = '/services' element = {<Services />} /> */}

        </Routes>
    </>
  )
}

export default App
