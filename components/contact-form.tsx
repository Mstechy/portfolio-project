"use client"

import { useState } from "react"

interface ContactFormProps {
  course?: string
  closeForm?: () => void
}

export default function ContactForm({ course, closeForm }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    course: course || "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("✅ Message sent successfully!")
        setFormData({ name: "", email: "", message: "", course: course || "" })
        if (closeForm) setTimeout(() => closeForm(), 1000) // close modal after 1s
      } else {
        const err = await res.json()
        setStatus("❌ Failed: " + err.error)
      }
    } catch (error) {
      setStatus("❌ Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Your message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 w-full"
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  )
}