"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ModalForm from "@/components/ui/modal-form"
import { Code, Search, Palette, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Custom websites built to convert visitors into customers, fully responsive, and optimized for SEO.",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Custom Development"],
    course: "Web Design Workshop",
    color: "primary",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven SEO strategies and targeted campaigns that drive organic traffic and boost your online presence.",
    features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Analytics & Reporting"],
    course: "SEO & Marketing Workshop",
    color: "accent",
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    description: "Comprehensive brand identity and creative solutions that make your business stand out.",
    features: ["Brand Identity", "Logo Design", "Marketing Materials", "Visual Strategy"],
    course: "Branding Workshop",
    color: "primary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We provide end-to-end digital solutions designed to help businesses grow, engage, and thrive online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                      service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${service.color === "primary" ? "text-primary" : "text-accent"}`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            service.color === "primary" ? "bg-primary" : "bg-accent"
                          }`}
                        ></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Modal Button */}
                  <ModalForm
                    course={service.course}
                    triggerText={
                      <span
                        className={`inline-flex items-center justify-between w-full px-4 py-2 text-white rounded cursor-pointer ${
                          service.color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                        }`}
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    }
                  />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}