import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import AddProduct from "./components/admin/AddProduct"
import Dashboard from "./components/admin/DashBoard"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Login from "./components/Login"
import Product from "./components/Product"
import Profile from "./components/Profile"
import SignUp from "./components/SignUp"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMe } from "./redux/userSlice"
import PrivateComponent from "./components/PrivateComponent"

function App() {

  const { isAuthenticated } = useSelector(state => state.user)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Route>
        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
