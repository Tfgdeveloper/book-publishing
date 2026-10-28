

import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Navbar from "../Sharedsections/Navbar";
import Footer from "../Sharedsections/Footer";
import { ServicesMenu } from "../Sharedsections/ServicesMegaMenu";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", megaMenu: ServicesMenu  },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <ScrollToTop />
      <Navbar logo="/image/logo.png" logoclass="" links={navLinks} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
