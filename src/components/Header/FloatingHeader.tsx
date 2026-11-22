"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Box, Download, Menu, Settings, X } from "lucide-react";

import { ThemeToggle } from "../ui/ToggleTheme";

interface NavbarProps {
  activeSection: string;
}

export default function FloatingHeader({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [workAndWritingUrl, setWorkAndWritingUrl] = useState(
    process.env.NODE_ENV === "development"
      ? "http://blogs.localhost:3000"
      : "https://blogs.kpmatlakala.co.za"
  );
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Work & Writing", href: workAndWritingUrl },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isLocalDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "[::1]";

    if (isLocalDevelopment) {
      const port = window.location.port ? `:${window.location.port}` : "";
      setWorkAndWritingUrl(`http://blogs.localhost${port}`);
    }
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("button, a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/settings") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out">
      <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <div
          className={`col-start-1 transition-all duration-300 ${
            isScrolled
              ? "scale-95 bg-background/40 p-1 backdrop-blur-md"
              : "scale-100"
          }`}
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2"
          >
            <span className="logo-float metallic-text neon-glow font-audiowide text-3xl text-primary">
              KPM
            </span>
          </Link>
        </div>

        <div className="col-start-2 hidden items-center gap-2 lg:flex">
          <div
            className={`rounded-full border border-border/20 transition-all duration-300 ${
              isScrolled
                ? "bg-background/50 px-1 py-2 backdrop-blur-md"
                : "bg-background/5 px-2 py-3 shadow-lg backdrop-blur-sm"
            }`}
          >
            <nav aria-label="Primary navigation">
              <ul className="flex gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`relative group rounded-full border-b-2 px-4 py-2 text-sm transition-all duration-300 ${
                          isActive
                            ? "border-primary text-primary"
                            : "border-transparent text-foreground/80 hover:border-primary/60 hover:text-primary"
                        }`}
                      >
                        <span className="relative z-10">{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-border/20 bg-background/40 text-foreground shadow-lg backdrop-blur-md hover:bg-background/60"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-[60]">
            <button
              type="button"
              className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <aside
              id="site-menu"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="site-menu-title"
              className="relative ml-auto flex h-full w-80 max-w-[85vw] flex-col border-l border-border/20 bg-background text-foreground shadow-xl"
            >
              <div className="mb-3 flex items-center justify-between border-b border-border/20 px-6 py-4">
                <h2 id="site-menu-title" className="text-base font-medium">
                  Quick Access
                </h2>
                <button
                  type="button"
                  className="rounded-full p-2 hover:bg-accent"
                  aria-label="Close menu"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 px-6 pt-4">
                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  Theme
                  <ThemeToggle />
                </div>
                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  3D
                  <Box className="h-4 w-4 opacity-50" />
                </div>
                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  <Link href="/settings" className="hover:underline">
                    Settings
                  </Link>
                  <Settings className="h-4 w-4" />
                </div>
              </div>

              <nav
                aria-label="Menu navigation"
                className="flex-1 space-y-1 overflow-y-auto px-6 py-4 lg:hidden"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  Navigation
                </p>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center justify-between rounded-lg px-4 py-3 transition-all ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-foreground hover:border-primary/60 hover:text-primary"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </nav>

              <div className="space-y-2 border-t border-border/20 px-6 py-4">
                <a
                  className="flex w-full items-center justify-start rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:bg-accent"
                  href="/KP-Matlakala-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
                <a
                  className="block w-full rounded-md px-4 py-2 hover:bg-accent"
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  className="block w-full rounded-md px-4 py-2 hover:bg-accent"
                  href="#"
                >
                  Feedback
                </a>
              </div>
            </aside>
          </div>
        )}
      </div>
    </header>
  );
}
