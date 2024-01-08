
import './App.css'
import { Routes, Route,} from 'react-router-dom'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import FileUpload from './pages/Fileupload'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contack' element={<Contact />} />
        <Route path='/upload' element={<FileUpload />} />
      </Routes>

    </div>
  )
}

export default App
