"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

// Import local images
import uiuxImg from "@/public/workshop/uiux.png"
import ecommerceImg from "@/public/workshop/ecommerce.png"

export default function WorkshopPage() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      title: "Responsive Portfolio Website",
      description: "Build a fully responsive personal portfolio website using modern tools and best practices."
    },
    {
      img: uiuxImg,
      title: "UI/UX Landing Page",
      description: "Create an engaging landing page with UI/UX principles to maximize user engagement and conversions."
    },
    {
      img: ecommerceImg,
      title: "E-commerce Web Portal",
      description: "Build a scalable and modern e-commerce platform with secure checkout and product management."
    }
  ]

  return (
    <main className="space-y-16 py-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-32 px-4 text-center rounded-lg shadow-lg mx-4 sm:mx-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif">
          Explore Our Web Design Projects
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Learn how we create high-performing websites for businesses. Get inspired by our real projects and see our design process in action.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Apply for Workshop
        </Button>

        <div className="mt-12 relative w-full h-80 sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80"
            alt="Web Design Workshop"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4">
        <h2 className="text-3xl font-bold mb-6 text-center font-serif">Workshop Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}