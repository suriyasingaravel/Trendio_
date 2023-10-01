// import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Profile from "../Pages/Profile"
import Women from "../Pages/Women"
import Accessories from "../Pages/Accessories"
import About from "../Pages/About"
import Brands from "../Pages/Brands"
// import Payment from "../Pages/Payment"
import Admin from "../Pages/Admin"
import CartPage from "../Pages/CartPage"
import Wishlist from "../Pages/Wishlist"
import { SinglePage } from "../Pages/SinglePage"
import { AccessorySinglePage } from "../Pages/AccessoriesSinglePage"
import PrivateRoutes from "./PrivateRoutes"
import { Alert, AlertIcon, Stack } from "@chakra-ui/react"
import Men from "../Pages/Men"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/about" element={<About />} />
      <Route path="/brands" element={<Brands />} />
      {/* <Route path="/payment" element={<Payment />} /> */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/accessory/:id" element={<AccessorySinglePage />} />

      <Route path="/product/:id" element={<SinglePage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route
        path="*"
        element={
          <Stack spacing={3}>
            <Alert paddingTop={120} status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>
          </Stack>
        }
      />
    </Routes>
  )
}

export default MainRoutes
