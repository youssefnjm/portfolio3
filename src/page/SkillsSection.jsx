import { LuPencil, LuDatabase, LuAppWindow, LuTerminal, LuCpu, LuGlobe } from 'react-icons/lu';
import GradientText from '../Components/GradientText';

const SkillBadge = ({ name }) => (
  <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 text-zinc-300 rounded-md text-xs font-mono">
    {name}
  </span>
);

const SkillCard = ({ title, icon: Icon, skills, color }) => (
  <div className="group relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all duration-300">
    <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-full ${color}`} />
    
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-2 rounded-lg bg-zinc-800 text-zinc-100 group-hover:scale-110 transition-transform`}>
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillBadge key={skill} name={skill} />
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section className="container m-auto py-20" id="skills">
      <div className="w-full">
        <div className="mb-12">
            <GradientText
                animationSpeed={5}
                showBorder={false}
            >
                Skills
            </GradientText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Frontend"
            icon={LuAppWindow} 
            color="bg-red-500"
            skills={["HTML", "CSS", "Javascript", "React.js", "Bootstrap", "Tailwind CSS", "React Bits"]} 
          />
          <SkillCard 
            title="Backend" 
            icon={LuTerminal} 
            color="bg-amber-500"
            skills={["Node.js", "Express", "Socket.io", "REST APIs"]} 
          />
          <SkillCard 
            title="Database" 
            icon={LuDatabase} 
            color="bg-red-500"
            skills={["MongoDB", "MySql"]} 
          />
          <SkillCard 
            title="AI & Tools" 
            icon={LuCpu} 
            color="bg-amber-500"
            skills={["openRouter API", "Git", "Docker", "Linux"]} 
          />
          <SkillCard 
            title="Design" 
            icon={LuPencil} 
            color="bg-red-500"
            skills={["Figma", "UI/UX",]} 
          />
        </div>
      </div>
    </section>
  );
}