import React, { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Brand */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          Urban / Tasks
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {["Home", "projects", "About", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link to="/sign-in">Create account</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full border-t bg-background px-4 py-4 z-50 shadow-lg">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="flex flex-col gap-3 pt-2">
              <ModeToggle />

              <Button variant="ghost" asChild className="w-full">
                <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              </Button>

              <Button asChild className="w-full">
                <Link to="/sign-in" onClick={() => setOpen(false)}>
                  create account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
