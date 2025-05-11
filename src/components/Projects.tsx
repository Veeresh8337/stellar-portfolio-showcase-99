
import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projectsData: ProjectCardProps[] = [
    {
      title: "E-commerce API",
      description: "A RESTful API for an e-commerce platform built with Node.js and Express, featuring authentication, product management, and order processing.",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      image: "https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=E-commerce+API",
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1-demo.com"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management solution with real-time updates, notifications, and team collaboration features.",
      tags: ["Python", "Django", "PostgreSQL", "Redis", "WebSockets"],
      image: "https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Task+Management",
      githubUrl: "https://github.com/yourusername/project2"
    },
    {
      title: "Financial Data Analyzer",
      description: "A microservice architecture for processing and analyzing financial data with high throughput and fault tolerance.",
      tags: ["Java", "Spring Boot", "Kafka", "ElasticSearch", "Docker"],
      image: "https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=Financial+Data",
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3-demo.com"
    },
    {
      title: "DevOps Automation Tools",
      description: "A suite of tools for automating CI/CD pipelines, infrastructure provisioning, and monitoring across cloud platforms.",
      tags: ["Terraform", "AWS", "Kubernetes", "GitHub Actions", "Prometheus"],
      image: "https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=DevOps+Tools",
      githubUrl: "https://github.com/yourusername/project4"
    }
  ];

  const categories = ["All", "Node.js", "Python", "Java", "DevOps"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "All" || project.tags.includes(activeFilter)
  );

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="mx-auto w-20 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="flex justify-center mb-10 flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
