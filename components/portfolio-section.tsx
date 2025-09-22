import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Website",
    category: "CLIENT PROJECT",
    description: "Custom built e-commerce platform that increased sales by 45% for our client.",
    image: "/modern-ecommerce-website.png",
    tags: ["React", "Node.js", "Stripe"],
    type: "client",
  },
  {
    title: "SEO Growth Project",
    category: "CLIENT PROJECT",
    description: "Optimized website traffic and improved Google rankings, resulting in 300% organic growth.",
    image: "/seo-analytics-dashboard.png",
    tags: ["SEO", "Analytics", "Content"],
    type: "client",
  },
  {
    title: "Student Web Project",
    category: "LEARNER PROJECT",
    description: "A learner built responsive portfolio website showcasing modern web development skills.",
    image: "/student-portfolio-website.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "student",
  },
  {
    title: "Creative Design Mockup",
    category: "LEARNER PROJECT",
    description: "Visual design mockup during our Creative Design Bootcamp.",
    image: "/creative-design-mockup.jpg",
    tags: ["Figma", "UI/UX", "Branding"],
    type: "student",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">Portfolio & Student Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore our client projects and learner work – showcasing real results and hands-on skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full ${
                      project.type === "client"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                  {project.type === "student" && (
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
