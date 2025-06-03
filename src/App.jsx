
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ErrorPage403 from "./pages/ErrorPage403";
import ErrorPage401 from "./pages/ErrorPage401";
import ErrorPage400 from "./pages/ErrorPage400";
import FormCustomer from "./pages/FormCustomer";
import Loading from "./components/Loading";
import UserList from "./pages/UserList";
import MainLayoutGuest from "./layouts/MainLayoutGuest";
import Products from "./pages/Products";
const FormOrder = React.lazy(() => import("./pages/FormOrder"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Orders = React.lazy(() => import("./pages/Order"));
const Customer = React.lazy(() => import("./pages/Customer"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Home = React.lazy(() => import("./pages/Guest/Home"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const Notes = React.lazy(() => import("./pages/Notes"));

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// import Orders from "./pages/Order";
// import Customer from "./pages/Customer";

// import Dashboard from "./pages/Dashboard";

// import FormOrder from "./pages/FormOrder";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Forgot from "./pages/Auth/Forgot";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/FormCustomer" element={<FormCustomer />} />
          <Route path="/FormOrder" element={<FormOrder />} />
          <Route path="/UserlIst" element={<UserList />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          <Route path="/Notes" element={<Notes/>} /> 
        </Route>

        <Route element={<MainLayoutGuest />}>
          
          <Route path="/Home" element={<Home />} />
        </Route>

        
          <Route path="/ErrorPage400" element={<ErrorPage400 />} />
          <Route path="/ErrorPage401" element={<ErrorPage401 />} />
          <Route path="/ErrorPage403" element={<ErrorPage403 />} />
        

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
