import { Routes, Route } from "react-router"; 
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Search } from "../pages/Search";
import { PrivateRoute } from "../auth/PrivateRoute";
import { HeroDetails } from "../pages/HeroDetails";
import { Login } from "../auth/LoginOut";

export default function Router() {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Routes protégées */}
      <Route 
        path="/search" 
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/hero/:id" 
        element={
          <PrivateRoute>
            <HeroDetails />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}