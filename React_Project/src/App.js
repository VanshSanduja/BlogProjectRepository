import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import {
  Navbar,
  Home,
  LogIn,
  SignUp,
  Contact,
  Blog,
  About,
  ViewDetails,
  Footer
  // DataProvider,
} from "./Components/All_Components";


function App() {
  const PriveRoute = ({ isAuthentication, ...props }) => {
    return isAuthentication ? <><Navbar /><Outlet /><Footer /></> : <Navigate to='/login' />
  }
  
  const [isAuthentication, isUserAuthentication] = useState(false);
  return (
    // <DataProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="*" element={<div>404 Not Found</div>} />
              <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn isUserAuthentication={isUserAuthentication} />} />

                <Route path="/" element={<PriveRoute isAuthentication={isAuthentication} />}>

                <Route path="/" element={<Home />} />
                <Route path="/viewdetails/:id" element={<ViewDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />

                </Route>

          </Routes>

        </BrowserRouter>
    // {/* </DataProvider> */}
  );
}

export default App;
