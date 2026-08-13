import { LuPencil, LuDatabase, LuAppWindow, LuTerminal, LuCpu, LuGlobe } from 'react-icons/lu';
import GradientText from '../Components/GradientText';

const SkillBadge = ({ name }) => (
  <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 text-zinc-300 rounded-md text-xs md:text-xs  font-mono">
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
      <h3 className="text-base md:text-lg font-bold text-white tracking-tight">{title}</h3>
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
    <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12" id="skills">
      <div className="w-full">
        {/* <div className="mb-12"> */}
            {/* ── Top label ── */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-widest uppercase">Stack</span>
            </div>

            {/* ── Big heading ── */}
            <div className="flex flex-col gap-8 mb-20">
              <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                Tool<br />
                <span className="text-purple-400">Box.</span>
              </h2>
              <p className="text-white/50 text-base max-w-xl leading-relaxed">
                The modern technologies and creative frameworks I use to bring complex ideas to life across the web.
              </p>
            </div>
        {/* </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Frontend"
            icon={LuAppWindow} 
            color="bg-purple-400"
            skills={["HTML", "CSS", "Javascript", "Typescript", "React.js", "Bootstrap", "Tailwind CSS", "React Bits"]} 
          />
          <SkillCard 
            title="Backend" 
            icon={LuTerminal} 
            color="bg-cyan-400"
            skills={["Nodejs", "Express", "Nestjs", "REST APIs", "Socket.io"]} 
          />
          <SkillCard 
            title="Database" 
            icon={LuDatabase} 
            color="bg-purple-400"
            skills={["MongoDB", "MySql", "Mariadb"]} 
          />
          <SkillCard 
            title="AI & Tools" 
            icon={LuCpu} 
            color="bg-cyan-400"
            skills={["openRouter API", "Git", "Docker", "Bash Scripting"]} 
          />
          <SkillCard 
            title="Design" 
            icon={LuPencil} 
            color="bg-purple-400"
            skills={["Figma", "UI/UX",]} 
          />
        </div>
      </div>
    </section>
  );
}