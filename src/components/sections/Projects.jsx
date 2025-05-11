import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";  


const GradientBackground = () => (
  <>
    <RevealOnScroll>
    {/* Top Left Gradient Shape */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-spin-slow z-0" />
    {/* Bottom Right Gradient Shape */}
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-bl from-fuchsia-500 via-indigo-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-spin-slow z-0" />
    </RevealOnScroll>
  </>
);

export const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 bg-gray-900 overflow-hidden">
      <GradientBackground />
      <RevealOnScroll>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Gesture Virtual Mouse */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-white/5 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-2">Gesture Virtual Mouse</h3>
              <p className="text-gray-400 mb-4">
                A computer control system using hand gestures via webcam to perform cursor movement and clicks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV", "Mediapipe"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com/hadi845/Hand-gesture-mouse-controller-" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Voice Assistant */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition bg-white/5 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-2">Voice Assistant (Panda)</h3>
              <p className="text-gray-400 mb-4">
                A desktop voice assistant that can perform tasks like opening apps, searching the web, and speaking replies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "SpeechRecognition", "Pyttsx3", "Wikipedia API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com/hadi845/Panda-Voice-Assistant" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Pac-Man Game */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition bg-white/5 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-2">Pac-Man Game</h3>
              <p className="text-gray-400 mb-4">
                A Java-based Pac-Man clone featuring maze navigation, ghosts, scoring, and smooth controls.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "OOP", "Swing"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com/hadi845/Pac-Man-Game-in-Java-using-Java-swing" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Car Management System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition bg-white/5 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-2">Car Management System</h3>
              <p className="text-gray-400 mb-4">
                A command-line Java app for managing car details, rentals, and user interactions through OOP principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "OOP", "File Handling"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
