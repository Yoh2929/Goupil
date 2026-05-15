import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, Laptop } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { primaryCta, publicRoutes, secondaryCta } from "../config/site";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 250, 248, 0)", "rgba(250, 250, 248, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="bg-foreground rounded-xl p-2 group-hover:bg-foreground/90 transition-colors">
                <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </div>
              <span className="text-xl font-bold tracking-tight">Goupil</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {publicRoutes.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-foreground"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? "Activer le mode clair" : "Activer le mode sombre"}
              className="p-2.5 rounded-xl hover:bg-muted transition-colors"
            >
              {theme === 'dark' ? "☀️" : "🌙"}
            </button>
            <Link to={secondaryCta.path}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-transparent text-foreground rounded-full font-medium border-2 border-border hover:border-foreground/20 hover:bg-muted/50 transition-all"
              >
                {secondaryCta.label}
              </motion.button>
            </Link>
            <Link to={primaryCta.path}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all"
              >
                {primaryCta.label}
              </motion.button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {publicRoutes.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-base font-medium transition-colors py-2 ${
                  location.pathname === link.path ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? "Activer le mode clair" : "Activer le mode sombre"}
                className="w-full px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium"
              >
                {theme === 'dark' ? "☀️ Mode clair" : "🌙 Mode sombre"}
              </button>
              <Link to={secondaryCta.path} onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium">{secondaryCta.label}</button>
              </Link>
              <Link to={primaryCta.path} onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium">{primaryCta.label}</button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
