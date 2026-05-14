import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingDonation } from "./components/FloatingDonation";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Actions } from "./pages/Actions";
import { Blog } from "./pages/Blog";
import { Events } from "./pages/Events";
import { Donate } from "./pages/Donate";
import { Join } from "./pages/Join";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { publicRoutes } from "./config/site";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/a-propos", element: <About /> },
  { path: "/nos-actions", element: <Actions /> },
  { path: "/evenements", element: <Events /> },
  { path: "/actualites", element: <Blog /> },
  { path: "/faire-un-don", element: <Donate /> },
  { path: "/adherer", element: <Join /> },
  { path: "/contact", element: <Contact /> },
  { path: "/mentions-legales", element: <Legal /> },
] as const;

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
        <FloatingDonation />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
