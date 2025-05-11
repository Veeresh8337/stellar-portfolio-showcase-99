
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-heading font-bold">
              <span className="text-primary">Y</span>ourName
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building robust backend solutions with clean code.
            </p>
          </div>

          <div className="flex space-x-8">
            <div>
              <h3 className="text-sm font-semibold mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} YourName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
