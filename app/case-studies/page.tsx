"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import ModalForm from "@/components/ui/modal-form"

// Example static case studies data
const caseStudies = [
  {
    title: "Modern E-Commerce Website",
    description: "A fully responsive online store optimized for performance, conversion, and user experience.",
    image: "/public/modern-ecommerce-website.png",
    course: "E-Commerce Project",
  },
  {
    title: "Student Portfolio Platform",
    description: "A custom portfolio platform for students to showcase their projects and skills effectively.",
    image: "/public/student-portfolio-website.jpg",
    course: "Portfolio Project",
  },
  {
    title: "SEO Analytics Dashboard",
    description: "A data-driven SEO analytics dashboard to monitor website performance and rankings.",
    image: "/public/seo-analytics-dashboard.png",
    course: "SEO Project",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore some of our recent projects and see how we deliver results that elevate businesses and digital skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card key={index} className="group border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="space-y-4">
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl font-bold">{caseStudy.title}</CardTitle>
                </CardHeader>
                <p className="text-muted-foreground leading-relaxed">{caseStudy.description}</p>

                {/* CTA Modal Button */}
                <ModalForm
                  course={caseStudy.course}
                  triggerText={
                    <span className="inline-flex items-center justify-between w-full px-4 py-2 text-white rounded bg-primary hover:bg-primary/90 cursor-pointer">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  }
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}