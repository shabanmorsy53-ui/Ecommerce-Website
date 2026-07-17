
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
import AdminSubCategoryPage from './Pages/Admin/AdminSubCategoryPage'
import AdminAddProductPage from './Pages/Admin/AdminAddProductPage'
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage'
import UserFavouriteProductPage from './Pages/User/UserFavouriteProductPage'
import UserAddressPage from './Pages/User/UserAddressPage'
import UserNewAddressPage from './Pages/User/UserNewAddressPage'
import UserEditAddressPage from './Pages/User/UserEditAddressPage'

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
        <Route path='/admin/subctegory' element={<AdminSubCategoryPage/>}/>
        <Route path='/admin/addproduct' element={<AdminAddProductPage/>}/>
        <Route path='/user/allorder' element={<UserAllOrdersPage/>}/>
        <Route path='/user/favourite' element={<UserFavouriteProductPage/>}/>
        <Route path='/user/address' element={<UserAddressPage/>}/>
        <Route path='/user/newaddress' element={<UserNewAddressPage/>}/>
        <Route path='/user/edit' element={<UserEditAddressPage/>}/>


      </Routes>
      
      </BrowserRouter>

        <Footer/>

      

    </>
  )
}

export default App
