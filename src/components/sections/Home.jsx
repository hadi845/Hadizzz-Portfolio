import { RevealOnScroll } from "../RevealOnScroll";
import hadiImg from "../../assets/me2.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Animated Profile Image with Blue Gradient Border */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            {/* Spinning Gradient Border */}
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-sky-300 via-blue-600 to-blue-900 p-1">
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>

            {/* Profile Image (static, on top) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={hadiImg}
                  alt="Hadi Muhammad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent whitespace-nowrap">
            Hi, I'm Hadi Muhammad
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            A passionate Software Engineering student at COMSATS University Islamabad, focused on developing innovative, user-centric software solutions. Skilled in Python, Java, and C, with a strong interest in artificial intelligence, machine learning, and creative problem-solving. Always eager to learn new technologies and contribute to impactful projects. Outside of tech, enjoys photography, videography, and editing as creative outlets.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
