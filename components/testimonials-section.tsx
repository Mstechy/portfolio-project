import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">Trusted by Clients, Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Don't just take our word for it – hear from the businesses and learners who've experienced real growth with
            Vermaxx.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl lg:text-2xl font-medium mb-8 text-balance leading-relaxed">
              "Working with Vermaxx transformed our online presence completely. Their strategic approach to SEO and web
              development resulted in a 300% increase in organic traffic and significantly improved our conversion
              rates."
            </blockquote>

            <div className="text-primary-foreground/90">
              <p className="font-semibold">— Marketing Director, Tech Startup</p>
              <p className="text-sm opacity-75">Verified Client Review</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
