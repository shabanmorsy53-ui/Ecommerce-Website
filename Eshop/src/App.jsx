
import './App.css'
import Footer from './Componants/Utility/Footer'
import NavBarLogin from './Componants/Utility/NavBarLogin'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import BrandPage from './Pages/Brand/BrandPage'
import AllCategory from './Pages/Category/AllCategory'
import HomePages from './Pages/Home/HomePages'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import CategoryShopProduct from './Pages/Product/CategoryShopProduct'
import ProductDetalisPage from './Pages/Product/ProductDetalisPage'
import CartPage from './Pages/Cart/CartPage'
import PaymentPage from './Pages/PaymentMethod/PaymentPage'
import AdminPage from './Pages/Admin/AdminPage'
import AdminAllOrderPage from './Pages/Admin/AdminAllOrderPage'
import AdminOrderDetalisPage from './Pages/Admin/AdminOrderDetalisPage'
import AdminBrandPage from './Pages/Admin/AdminBrandPage'
import AdminCategoryPage from './Pages/Admin/AdminCategoryPage'

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
        <Route path='/product' element={<CategoryShopProduct/>}/>
        <Route path='/product/:id' element={<ProductDetalisPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/order/payment' element={<PaymentPage/>}/>
        <Route path='/admin/product' element={<AdminPage/>}/>
        <Route path='/admin/allorder' element={<AdminAllOrderPage/>}/>
        <Route path='/admin/order/:id' element={<AdminOrderDetalisPage/>}/>
        <Route path='/admin/allbrand' element={<AdminBrandPage/>}/>
        <Route path='/admin/category' element={<AdminCategoryPage/>}/>


      </Routes>
      
      </BrowserRouter>

        <Footer/>

      

    </>
  )
}

export default App
