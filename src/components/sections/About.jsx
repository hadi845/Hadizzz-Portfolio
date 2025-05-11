import { RevealOnScroll } from "../RevealOnScroll";

const GradientBackground = () => (
  <>
    <RevealOnScroll>
    {/* Top Left Gradient Orb */}
    <div className="absolute top-[-120px] left-[-100px] w-80 h-80 bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-spin-slow z-0" />
    {/* Bottom Right Gradient Orb */}
    <div className="absolute bottom-[-120px] right-[-100px] w-80 h-80 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-spin-slow z-0" />
    </RevealOnScroll>
  </>
);

export const About = () => {
  const programmingSkills = ["Python", "Java", "C"];
  const techAndTools = ["React", "TailwindCSS", "Git", "VS Code", "Canva"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900 relative overflow-hidden"
    >
      <GradientBackground />
      
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 z-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m a dedicated software engineering student at COMSATS with a
              strong passion for coding, AI/ML, and building impactful
              solutions. I enjoy combining logic and creativity to develop
              applications, games, and intelligent systems. I’m also a
              self-taught photographer and editor who loves creating content and
              exploring new tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {techAndTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Software Engineering</strong> – COMSATS
                  University Islamabad (2023–2027)
                </li>
                <li>Current CGPA: 3.60</li>
                <li>
                  Relevant Coursework: Object Oriented Programming,
                  Data Structures, Design and Analysis of Algorithms,
                  Artificial Intelligence
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📁 Projects</h3>
              <div className="text-gray-300 space-y-2">
                <p>• 🐼 Voice Assistant "Panda" using Python</p>
                <p>• 🖐️ Hand Gesture Virtual Mouse</p>
                <p>• 👾 Pac-Man Game in Java</p>
                <p>• 🌐 Personal Portfolio Website</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
