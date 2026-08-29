import { describe, it, expect } from "vitest";

interface Project {
  name: string;
  category: string;
  tech: string[];
  github?: string;
  live?: string;
  youtube?: string;
  postman?: string;
  figma?: string;
}

const projects: Project[] = [
  {
    name: "SkillSense AI",
    category: "full-stack",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Redis", "OpenAI API", "TypeScript"],
    github: "https://github.com/TrikamDevasi/SkillSense_AI",
  },
  {
    name: "Game Hub",
    category: "games",
    tech: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    live: "https://trikamdevasi.github.io/game-portal",
    github: "https://github.com/TrikamDevasi/game-portal",
  },
  {
    name: "Cinephiles Watch",
    category: "frontend",
    tech: ["React", "Tailwind CSS", "TMDB API", "React Router", "Figma"],
    live: "https://cinephiles-watch-react-js.onrender.com/",
    github: "https://github.com/TrikamDevasi/cinephiles-watch-react.js-.git",
    figma: "https://www.figma.com/proto/ZRRy0ASHhexMkGPwNhUDQK/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=1003-43&t=m9PW1ljhrDRXTmxL-1",
  },
  {
    name: "Expense Manager",
    category: "full-stack",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript", "CSS3"],
    live: "https://expense-management-odoo.netlify.app/",
    github: "https://github.com/Trikamcg/expense_management/tree/main/project",
  },
  {
    name: "Tic Tech Toe (E-Commerce)",
    category: "full-stack",
    tech: ["React", "PostgreSQL", "Express", "Docker", "Node.js"],
    github: "https://github.com/TrikamDevasi/tic_tech_toe-ecommerce-website-.git",
  },
  {
    name: "Netflix Web Interface",
    category: "other",
    tech: ["React", "Firebase", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/TrikamDevasi/netflix-clone",
    live: "https://trikam-netflix-clone.netlify.app/",
  },
  {
    name: "Amazon Storefront UI",
    category: "other",
    tech: ["React", "Firebase", "Context API", "CSS Grid"],
    github: "https://github.com/TrikamDevasi/amazon-clone",
    live: "https://trikam-amazon-clone.netlify.app/",
  },
];

describe("Portfolio Project Suite & Data Integrity", () => {
  it("should have valid names and tech stack for every project", () => {
    projects.forEach((project) => {
      expect(project.name).toBeDefined();
      expect(project.name.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(project.tech)).toBe(true);
      expect(project.tech.length).toBeGreaterThan(0);
    });
  });

  it("should NOT contain any fake or placeholder URLs", () => {
    projects.forEach((project) => {
      const urls = [project.github, project.live, project.youtube, project.postman, project.figma].filter(Boolean) as string[];
      urls.forEach((url) => {
        expect(url).not.toContain("placeholder");
        expect(url).not.toContain("example.com");
        expect(url).not.toBe("#");
        expect(url.startsWith("http://") || url.startsWith("https://")).toBe(true);
      });
    });
  });

  it("should correctly filter projects by category", () => {
    const fullStackProjects = projects.filter((p) => p.category === "full-stack");
    expect(fullStackProjects.length).toBe(3);

    const gamesProjects = projects.filter((p) => p.category === "games");
    expect(gamesProjects.length).toBe(1);
    expect(gamesProjects[0].name).toBe("Game Hub");

    const frontendProjects = projects.filter((p) => p.category === "frontend");
    expect(frontendProjects.length).toBe(1);
    expect(frontendProjects[0].name).toBe("Cinephiles Watch");
  });
});

describe("Form Validation Logic", () => {
  const validateContactForm = (name: string, email: string, message: string) => {
    const isNameValid = name.trim().length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isMessageValid = message.trim().length >= 10;
    return isNameValid && isEmailValid && isMessageValid;
  };

  it("should validate complete and correct form submissions", () => {
    const valid = validateContactForm("Trikam Devasi", "trikam.devasi.cg@gmail.com", "Hi, I would like to discuss an internship opportunity!");
    expect(valid).toBe(true);
  });

  it("should reject messages with fewer than 10 characters", () => {
    const invalid = validateContactForm("John", "john@example.com", "Hi");
    expect(invalid).toBe(false);
  });

  it("should reject invalid email formats", () => {
    const invalid = validateContactForm("John", "not-an-email", "Looking forward to speaking with you soon.");
    expect(invalid).toBe(false);
  });
});
