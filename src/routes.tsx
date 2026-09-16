import { createBrowserRouter, Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Products from "./pages/Products";
import NexoraDetail from "./pages/NexoraDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

function Root() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <>
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/admin",
    Component: Admin,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "philosophy", Component: Philosophy },
      { path: "products", Component: Products },
      { path: "products/nexora", Component: NexoraDetail },
      { path: "about", Component: About },
      { path: "careers", Component: Careers },
      { path: "careers/:id", Component: CareerDetail },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "legal/:slug", Component: Legal },
      { path: "*", Component: NotFound },
    ],
  },
]);
