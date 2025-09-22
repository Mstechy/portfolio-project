"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ModalFormProps {
  triggerText: React.ReactNode
  course?: string
}

export default function ModalForm({ triggerText, course }: ModalFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
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
        body: JSON.stringify({ ...formData, course }),
      })

      if (res.ok) {
        setStatus("✅ Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
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
    <Dialog>
      <DialogTrigger asChild>{triggerText}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{course ? `Apply for ${course} `: "Send us a Query"}</DialogTitle>
          <DialogDescription className="mb-4">
            Fill in your details and we will get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </DialogContent>
    </Dialog>
  )
}