import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            At Vermaxx, we don't just build websites – we build momentum. We exist to help brands grow with digital
            tools that actually work, and to guide learners who want to master real-world tech skills. Our belief is
            simple: when creativity meets strategy, growth follows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">For Businesses</h3>
                  <p className="text-sm text-muted-foreground">
                    We partner with forward-thinking companies seeking scale, stronger high-performing websites, SEO
                    strategies, and branding systems that convert visitors into customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">For Learners</h3>
                  <p className="text-sm text-muted-foreground">
                    We guide individuals who are serious about mastering real-world tech skills, not just theory. Every
                    learner leaves with skills, confidence, and a portfolio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Trusted by 500+ clients</h4>
                <p className="text-muted-foreground text-sm">who've seen real results with us.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">200+ learners</h4>
                <p className="text-muted-foreground text-sm">who've seen real results with us.</p>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Our Philosophy</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We believe in building digital solutions that don't just look good – they perform. Every project is
                  crafted with precision, strategy, and a deep understanding of what drives results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
