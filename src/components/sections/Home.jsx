import { RevealOnScroll } from "../RevealOnScroll";
import hadiImg from "src/assets/me1.jpg"; // adjust the path based on your file structure


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Profile Image with Instagram-style Gradient Border */}
          <div className="w-36 h-36 rounded-full mx-auto mb-6 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1">
            <img
              src={hadiImg} // <-- Replace this with your image path
              alt="Hadi Muhammad"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
            Hi, I'm Hadi Muhammad
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
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
