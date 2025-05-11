
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"] },
    { category: "Frameworks", items: ["Node.js", "Express", "Django", "Spring Boot", "FastAPI"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"] },
    { category: "Tools", items: ["Git", "GitHub", "JIRA", "Postman", "VS Code"] }
  ];

  return (
    <section id="about" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="mx-auto w-20 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">My Background</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Backend Developer with X years of experience building robust and scalable web applications. My journey in software development started with [your starting point] and has evolved into a deep expertise in backend technologies and architecture.
              </p>
              <p>
                I specialize in designing and implementing efficient API solutions, database optimization, and server-side architecture. My approach focuses on writing clean, maintainable code that solves real business problems.
              </p>
              <p>
                When I'm not coding, you can find me [your hobbies/interests]. I believe in continuous learning and am currently exploring [current learning interests].
              </p>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="border border-border bg-card/50 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
