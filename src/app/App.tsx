import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
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
import { FAQ } from "./pages/FAQ";
import { Reuse } from "./pages/Reuse";
import { DigitalInclusion } from "./pages/DigitalInclusion";
import { Workshops } from "./pages/Workshops";
import { publicRoutes } from "./config/site";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/a-propos", element: <About /> },
  { path: "/nos-actions", element: <Actions /> },
  { path: "/reemploi-informatique", element: <Reuse /> },
  { path: "/inclusion-numerique", element: <DigitalInclusion /> },
  { path: "/ateliers-accompagnement", element: <Workshops /> },
  { path: "/evenements", element: <Events /> },
  { path: "/actualites", element: <Blog /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/faire-un-don", element: <Donate /> },
  { path: "/adherer", element: <Join /> },
  { path: "/contact", element: <Contact /> },
  { path: "/mentions-legales", element: <Legal /> },
] as const;

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground dark:bg-slate-950 dark:text-slate-50">
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
