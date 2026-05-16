import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { ChevronDown, Laptop, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import {
  isGroupActive,
  isRouteActive,
  navGroups,
  navStandalone,
  primaryCta,
  secondaryCta,
  type NavGroup,
  type SiteRoute,
} from "../config/site";
import { cn } from "./ui/utils";

function NavLink({
  item,
  pathname,
  onNavigate,
  className,
}: {
  item: SiteRoute;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const active = isRouteActive(pathname, item.path);
  return (
    <Link
      to={item.path}
      onClick={onNavigate}
      className={cn(
        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-foreground/5 text-foreground" : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

function DesktopNavGroup({ group, pathname }: { group: NavGroup; pathname: string }) {
  const active = isGroupActive(pathname, group);

  return (
    <motion.div className="relative group/nav">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          active ? "text-foreground bg-foreground/5" : "text-foreground/65 hover:text-foreground hover:bg-foreground/5",
        )}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover/nav:rotate-180" />
      </button>
      <motion.div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(100vw-2rem,22rem)] -translate-x-1/2 pt-3 opacity-0 translate-y-1 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-focus-within/nav:pointer-events-auto group-focus-within/nav:opacity-100 group-focus-within/nav:translate-y-0">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 shadow-xl shadow-black/5 backdrop-blur-xl dark:shadow-black/30">
          {group.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors",
                isRouteActive(pathname, item.path)
                  ? "bg-primary/10 text-foreground"
                  : "hover:bg-muted/80",
              )}
            >
              <span className="text-sm font-medium">{item.label}</span>
              {item.description ? (
                <span className="text-xs text-muted-foreground">{item.description}</span>
              ) : null}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <motion.div
          layout
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 border px-4 sm:px-5 transition-[background-color,box-shadow,border-color,border-radius] duration-300",
            scrolled
              ? "h-14 rounded-2xl border-border/60 bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-slate-950/80 dark:shadow-black/40"
              : "h-16 rounded-2xl border-transparent bg-transparent",
          )}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="flex shrink-0 items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
              <Laptop className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Goupil</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navGroups.map((group) => (
              <DesktopNavGroup key={group.label} group={group} pathname={location.pathname} />
            ))}
            {navStandalone.map((item) => {
              const active = isRouteActive(location.pathname, item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "bg-foreground/5 text-foreground" : "text-foreground/65 hover:bg-foreground/5 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to={secondaryCta.path}
              className="hidden xl:inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              {secondaryCta.label}
            </Link>
            <Link
              to={primaryCta.path}
              className="inline-flex rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-foreground/5"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              aria-label="Fermer le menu"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-border bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-semibold">Menu</span>
                <button type="button" onClick={() => setIsOpen(false)} aria-label="Fermer">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                {navGroups.map((group) => (
                  <div key={group.label} className="mb-6">
                    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.label}
                    </p>
                    <motion.div className="space-y-1">
                      {group.items.map((item) => (
                        <NavLink
                          key={item.path}
                          item={item}
                          pathname={location.pathname}
                          onNavigate={() => setIsOpen(false)}
                        />
                      ))}
                    </motion.div>
                  </div>
                ))}
                <div className="mb-6 space-y-1 border-t border-border pt-6">
                  {navStandalone.map((item) => (
                    <NavLink
                      key={item.path}
                      item={item}
                      pathname={location.pathname}
                      onNavigate={() => setIsOpen(false)}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2 border-t border-border p-4">
                <Link
                  to={secondaryCta.path}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full justify-center rounded-full border border-border px-4 py-3 text-sm font-medium"
                >
                  {secondaryCta.label}
                </Link>
                <Link
                  to={primaryCta.path}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  {primaryCta.label}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
