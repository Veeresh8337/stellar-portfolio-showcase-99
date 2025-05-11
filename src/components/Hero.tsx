
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <p className="text-primary font-medium">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Your Name
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
                I'm a <span className="text-gradient">Backend Developer</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl">
              I build efficient, scalable backend systems and APIs. 
              Passionate about clean code, performance optimization, and solving complex problems.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume <Download size={16} className="ml-2" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-5 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 mb-10 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 opacity-20 blur-3xl"></div>
              <div className="absolute inset-2 rounded-full bg-background"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-5xl font-bold text-white">
                YN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
