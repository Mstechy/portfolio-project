import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    image: "/male-developer-headshot.png",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
  },
  {
    name: "Sarah Chen",
    role: "Design Director",
    image: "/female-designer-headshot.png",
    bio: "Creative director specializing in brand identity and user experience design.",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-serif">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            The creative minds and technical experts behind every successful project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
