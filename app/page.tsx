"use client"

import React, { useState, useEffect } from 'react';
import { Github, Cloud, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() { 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Subtle animated dots */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className={`relative z-10 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-12 gap-16 font-mono transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Header */}
        <header className="flex flex-col items-center gap-8 mt-12">
          <div className="group cursor-default">
            <div className="text-center">
              <div className="text-6xl sm:text-8xl font-bold tracking-tighter mb-4 transition-all duration-300 group-hover:tracking-wide">
                CI/CD
              </div>
              <div className="h-px bg-white w-full mb-4 transition-all duration-300 group-hover:w-3/4 mx-auto"></div>
              <div className="text-lg sm:text-xl font-light tracking-widest uppercase">
                GitHub Actions + AWS
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col gap-16 row-start-2 items-center text-center max-w-4xl w-full">
          
          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
            Professional CI/CD pipeline with automated workflows, 
            seamless deployments, and cloud infrastructure.
          </p>

          {/* Simple Status Grid */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-2xl">
            <div className="group">
              <div className="border border-gray-800 p-6 transition-all duration-300 hover:border-white">
                <div className="text-2xl font-bold mb-2">BUILD</div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">PASSING</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="border border-gray-800 p-6 transition-all duration-300 hover:border-white">
                <div className="text-2xl font-bold mb-2">TEST</div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">PASSED</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="border border-gray-800 p-6 transition-all duration-300 hover:border-white">
                <div className="text-2xl font-bold mb-2">DEPLOY</div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">LIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-lg">
            <a
              className="group border border-white bg-white text-black transition-all duration-300 hover:bg-black hover:text-white px-8 py-4 text-center font-mono uppercase tracking-wider"
              href="https://github.com/sreecharan-desu/hello-ci-cd/actions/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center gap-3">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
            
            <a
              className="group border border-gray-600 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black px-8 py-4 text-center font-mono uppercase tracking-wider"
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center gap-3">
                <Cloud className="w-5 h-5" />
                <span>AWS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>

        </main>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-600 py-8 border-t border-gray-900 w-full font-mono uppercase tracking-widest">
          <div className="flex gap-8 justify-center">
            <span>Next.js</span>
            <span>•</span>
            <span>GitHub Actions</span>
            <span>•</span>
            <span>AWS</span>
          </div>
        </footer>
        <Footer/>
      </div>
    </div>
  );
}


import { FaDiscord, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/sreecharan-desu", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/sreecharan-desu", icon: FaLinkedin },
    { name: "X", url: "https://x.com/sr3x0r", icon: FaXTwitter },
    { name: "YouTube", url: "https://www.youtube.com/@mrsreecharan", icon: FaYoutube },
    { name: "Discord", url: "https://discord.com/users/1370022259606945792", icon: FaDiscord },
  ];

  return (
    <footer className="bg-black py-4 z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white text-xl sm:text-2xl">uniZ</span>
            <span className="text-gray-400 text-sm mt-1">© {year}</span>
          </div>

          {/* Creator Credit and Social Links */}
          <div className="flex flex-col mt-4 md:mt-0">
            {/* Creator Credit */}
            <div className="text-gray-400 text-sm flex items-center">
              <span>Made with</span>
              <span className="text-red-500 text-xl animate-pulse ml-1 transform hover:scale-125 transition-transform duration-300 cursor-default inline-block">
                ♥
              </span>
              <a
                href="https://sr3x0r.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium hover:text-white transition-colors group relative"
              >
                by SreeCharan
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
                  aria-label={link.name}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}