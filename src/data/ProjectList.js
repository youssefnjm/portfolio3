import Clockasion from '../assets/Project/Clockasion.jpeg'
import IdeaPulse from '../assets/Project/IdeaPluse.jpeg'
import DarNet from '../assets/Project/DarNet.jpeg'
import WC26 from '../assets/Project/WC26.jpeg'
import TICTACTOE from '../assets/Project/TICTACTOE.jpeg'
import Inception from '../assets/Project/Inception.jpeg'
import Born2beroot from '../assets/Project/Born2beroot.jpeg'
import Minishell from '../assets/Project/minishell.jpeg'

const ProjectList = [
  {
    name: "Clockasion E-Commerce",
    img: Clockasion,
    imgPlaceholder: false,
    desc: "A premium brand management ecosystem featuring a high-conversion storefront and a robust task management backend.",
    link: "https://github.com/youssefnjm/Clockasion",
    github: "https://github.com/youssefnjm/Clockasion",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express"],
    type: "Full-Stack Web App"
  },
  {
    name: "IdeaPulse",
    img: IdeaPulse,
    imgPlaceholder: false,
    desc: "A social ecosystem for founders and investors to validate concepts through public pitching, real-time chats, and AI-powered feasibility analysis.",
    link: "https://github.com/youssefnjm/ideaPulse",
    github: "https://github.com/youssefnjm/ideaPulse",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI API"],
    type: "Real-Time Platform"
  },
  {
    name: "DarNet",
    img: DarNet,
    imgPlaceholder: false,
    desc: "A streamlined community management SaaS designed to bridge communication gaps between residents and property syndics.",
    link: "https://github.com/youssefnjm/DarNet",
    github: "https://github.com/youssefnjm/DarNet",
    tech: ["React", "NestJS", "PostgreSQL", "Docker", "TypeScript"],
    type: "Full-Stack Web App"
  },
  {
    name: "World Cup 2026 Hub",
    img: WC26,
    imgPlaceholder: false,
    desc: "A React-based World Cup 2026 experience powered by dynamic data sources, Context API state management, intelligent featured-match selection, and timezone-aware scheduling.",
    link: "https://github.com/youssefnjm/world-cup-26-matches",
    github: "https://github.com/youssefnjm/world-cup-26-matches",
    tech: ["React", "Context API", "CSS Modules", "Vite"],
    type: "Sports Dashboard"
  },
  {
    name: "Online Tic Tac Toe",
    img: TICTACTOE,
    imgPlaceholder: false,
    desc: "A real-time competitive experience featuring instant state synchronization and a sleek, minimalist interface for seamless head-to-head gameplay.",
    link: "https://github.com/youssefnjm/Tic-Tac-Toe",
    github: "https://github.com/youssefnjm/Tic-Tac-Toe",
    tech: ["React", "Socket.io", "Node.js", "Express"],
    type: "Real-Time Game"
  },
  {
    name: "Inception",
    img: Inception,
    imgPlaceholder: false,
    desc: "Multi-container infrastructure with Docker Compose: Nginx (TLS v1.2/1.3), WordPress with PHP-FPM, MariaDB with persistent volumes, automated with Bash scripts.",
    link: "https://github.com/youssefnjm/Inception",
    github: "https://github.com/youssefnjm/Inception",
    tech: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB", "Bash", "TLS/SSL"],
    type: "DevOps / Infrastructure"
  },
  {
    name: "Born2beroot",
    img: Born2beroot,
    imgPlaceholder: false,
    desc: "Hardened Linux server in VM with LVM encrypted partitions, SSH on custom port, UFW firewall, AppArmor, strict sudo rules, and cron monitoring script.",
    link: "https://github.com/youssefnjm/Born2beroot",
    github: "https://github.com/youssefnjm/Born2beroot",
    tech: ["Linux", "SSH", "UFW", "AppArmor", "LVM", "Bash", "Cron"],
    type: "System Administration"
  },
  {
    name: "Minishell",
    img: Minishell,
    imgPlaceholder: false,
    desc: "Unix shell in C: command parsing, process management, pipes, redirections, signal handling, built-in commands (cd, echo, pwd, export, unset, env, exit).",
    link: "https://github.com/youssefnjm/Minishell",
    github: "https://github.com/youssefnjm/Minishell",
    tech: ["C", "Unix Signals", "Pipes", "Redirections", "Process Management"],
    type: "Systems Programming"
  },
];

export default ProjectList;