"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", date: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const consultationOptions = [
    { 
      title: "Website Audit", 
      description: "We analyze your website and provide actionable recommendations.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" // laptop with charts
    },
    { 
      title: "Digital Marketing Strategy", 
      description: "Plan your online campaigns to maximize ROI.",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80" // marketing workspace
    },
    { 
      title: "UX/UI Review", 
      description: "Improve your website's design for better user experience.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80" // designers at desk
    },
  ]

  return (
    <main className="space-y-16 py-24">

      {/* Hero Section */}
      <section className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif">Book a Consultation</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Choose a service, pick a date, and our experts will guide you to achieve your digital goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {consultationOptions.map((option, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white">
              <Image
                src={option.image}
                alt={option.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-left">
                <h3 className="font-bold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="">Select Consultation Type</option>
              {consultationOptions.map((option, idx) => (
                <option key={idx} value={option.title}>{option.title}</option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <Button type="submit" size="lg" className="bg-primary text-white hover:bg-primary/90">
              Book Consultation
            </Button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-muted-foreground">Your consultation request has been submitted.</p>
          </div>
        )}
      </section>
    </main>
  )
}