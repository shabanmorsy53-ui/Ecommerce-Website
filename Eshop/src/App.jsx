
import './App.css'
import Footer from './Componants/Utility/Footer'
import NavBarLogin from './Componants/Utility/NavBarLogin'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import BrandPage from './Pages/Brand/BrandPage'
import AllCategory from './Pages/Category/AllCategory'
import HomePages from './Pages/Home/HomePages'
import { BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {


  return (
    <>

      <NavBarLogin/>

      <BrowserRouter>

      <Routes>

        <Route index element={<HomePages/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/allcategory' element={<AllCategory/>}/>
        <Route path='/allbrand' element={<BrandPage/>}/>

      </Routes>
      
      </BrowserRouter>

        <Footer/>

      

    </>
  )
}

export default App
