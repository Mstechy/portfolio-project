"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import ModalForm from "@/components/ui/modal-form"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-background/80 mb-8 text-lg leading-relaxed">
              Ready to elevate your business or master new skills? Reach out and let's discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>vermaxxdigital@outlook.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+2347016323724</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>kwara, ilorin</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ModalForm
                triggerText={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Start Your Project
                  </Button>
                }
              />
              <ModalForm
                triggerText={
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/20 text-background hover:bg-background/10 w-full sm:w-auto"
                  >
                    Schedule Consultation
                  </Button>
                }
              />
            </div>
          </div>

          {/* Logo & Links */}
          <div className="text-center lg:text-right">
            <div className="mb-8">
              <span className="text-4xl font-bold gradient-text font-serif">Vermaxx</span>
              <p className="text-background/60 mt-2">Digital Solutions & Marketing Experts</p>
            </div>

            <nav className="flex flex-wrap justify-center lg:justify-end gap-6 mb-8">
              <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-background/80 hover:text-primary transition-colors">
                Work
              </a>
            </nav>

            <div className="text-background/60 text-sm">
              <p>&copy; 2024 Vermaxx. All rights reserved.</p>
              <p className="mt-2">Built with precision, designed for growth.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}