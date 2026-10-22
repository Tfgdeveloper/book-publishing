
import { MotionConfig } from "framer-motion";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import ReviewsPage from "./pages/Reviews";
import ServiceDetail from "./pages/ServiceDetail";
import LegalPage from "./pages/Legalpage";



function App() {
  return (
      <MotionConfig reducedMotion="user">
        <Routes>
          {/* Every page inside Layout gets the Navbar + Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/privacy-policy" element={<LegalPage slug="privacy-policy" />} />
            <Route path="/terms-and-conditions" element={<LegalPage slug="terms-and-conditions" />} />
            <Route path="/refund-policy" element={<LegalPage slug="refund-policy" />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MotionConfig>
    
  );
}

export default App;