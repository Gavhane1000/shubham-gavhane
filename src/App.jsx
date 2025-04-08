import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Router>
      <RouteManager />
    </Router>
  );
}

function RouteManager() {
  const location = useLocation();
  const [hasRedirected, setHasRedirected] = useState(false);

  // 👇 This ensures user sees landing first even if they type /home
  useEffect(() => {
    if (location.pathname !== "/" && !hasRedirected) {
      setHasRedirected(true);
    }
  }, [location.pathname, hasRedirected]);

  if (location.pathname !== "/" && !hasRedirected) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
