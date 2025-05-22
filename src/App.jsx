import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* You can add other routes here if needed */}
      </Routes>
    </Router>
  );
}

function MainPage() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 4500); // Show home after 4.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return showHome ? <HomePage /> : <LandingPage />;
}

export default App;
