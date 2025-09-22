"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Vermaxx Logo"
              width={100}    // intrinsic size
              height={500}
              priority
              className="h-20 w-auto sm:h-24 lg:h-28"
            />
            <span className="ml-2 text-sm text-muted-foreground hidden sm:block">
              Digital Solutions & Marketing Experts
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">Work</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/workshop">
              <Button variant="outline" size="sm">Workshop</Button>
            </Link>
            <Link href="/consultation">
              <Button size="sm" className="bg-primary hover:bg-primary/90">Consultation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">Work</Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/workshop">
                  <Button variant="outline" size="sm">Workshop</Button>
                </Link>
                <Link href="/consultation">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">Consultation</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}