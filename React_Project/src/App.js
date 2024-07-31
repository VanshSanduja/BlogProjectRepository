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
  DataProvider,
} from "./Components/All_Components";

const PriveRoute = ({ isAuthentication, ...props }) => {
  return isAuthentication ? <><Navbar /><Outlet /></>:<Navigate replace to='/login' />
}

function App() {
  
  const [isAuthentication, isUserAuthentication] = useState(false);

  return (
    <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/login"
              element={<LogIn isAuthentication={isUserAuthentication} />}
            />

            <Route
              path="/"
              element={<PriveRoute isAuthentication={isAuthentication} />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Route>

            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
