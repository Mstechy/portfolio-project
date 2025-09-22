import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Code, Rocket, BarChart, Zap } from "lucide-react"

const workflowSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your goals, industry, and audience to craft a clear roadmap tailored for maximum impact.",
    phase: "01",
  },
  {
    icon: Lightbulb,
    title: "Creative Design",
    description: "Our team brings ideas to life with user-centered designs that blend beauty and functionality.",
    phase: "02",
  },
  {
    icon: Code,
    title: "Smart Development",
    description:
      "From sleek websites to robust applications, we build with precision, performance, and scalability in mind.",
    phase: "03",
  },
  {
    icon: Rocket,
    title: "Seamless Launch",
    description: "We test, refine, and roll out your product with zero hassle, delivering on time and within budget.",
    phase: "04",
  },
  {
    icon: BarChart,
    title: "Scale & Optimize",
    description: "Post-launch, we track performance, refine strategies, and unlock new opportunities for growth.",
    phase: "05",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our disciplined workflow ensures every client achieves growth, and every learner gains real skills that
            last.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {workflowSteps.slice(0, 2).map((step, index) => (
              <WorkflowCard key={index} step={step} />
            ))}
          </div>

          {/* Center Column */}
          <div className="space-y-8">
            {workflowSteps.slice(2, 4).map((step, index) => (
              <WorkflowCard key={index + 2} step={step} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <WorkflowCard step={workflowSteps[4]} />

            {/* Call to Action Card */}
            <Card className="bg-primary text-primary-foreground border-primary">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-primary-foreground/90 mb-4 text-sm">
                  Let's discuss your project and create something amazing together.
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Start Your Project
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowCard({ step }: { step: (typeof workflowSteps)[0] }) {
  const IconComponent = step.icon

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{step.phase}</span>
              <h3 className="font-bold text-lg">{step.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
