"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import ModalForm from "@/components/ui/modal-form"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden"
    >
      {/* Background Floating Shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ clients worldwide
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6 font-serif">
            <span className="gradient-text">Digital Solutions</span>
            <br />
            <span className="text-foreground">& Skills That</span>
            <br />
            <span className="text-primary">Elevate Your Business</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
            From custom websites to result-driven marketing and expert-led courses, Vermaxx delivers innovative and
            individual solutions that grow your business and digital skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* View Case Studies */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Send Us a Query */}
            <ModalForm
              triggerText={
                <span className="inline-flex items-center justify-center px-8 py-4 text-lg text-primary bg-transparent border border-primary rounded hover:bg-primary/10 cursor-pointer gap-2">
                  Let’s Discuss Your Project
                  <Play className="ml-2 h-5 w-5" />
                </span>
              }
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Learners Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}