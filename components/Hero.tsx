import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { STATS } from '../constants';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop", // Group of doctors
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1920&auto=format&fit=crop", // Close up stethoscope
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1920&auto=format&fit=crop"  // Modern hospital corridor/tech
];

const STAT_IMAGES = {
  support: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=400&auto=format&fit=crop", // Handshake/Support
  satisfaction: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop" // Happy students group
};

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headlineWords = ["Empowering", "MBBS", "Students", "into", "Global", "Doctors"];
  const subText = "We don't just teach medicine - we shape healers who can serve anywhere in the world.";

  // Theme Colors
  const THEME = {
    white: "#FFFFFF",
    highlight: "#4FC3F7", // Light Blue
  };

  // Slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans overflow-hidden bg-black">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Navigation Bar - Semi-opaque Dark Overlay with Enhanced Curved Bottom */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg rounded-b-[60px] transition-all duration-300 border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 select-none cursor-pointer group">
            <div className="w-10 h-10 relative shrink-0">
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible transition-transform duration-300 group-hover:scale-110">
                {/* Tree - Light Blue & White Theme */}
                <path d="M50 70 C20 70 10 40 50 10 C90 40 80 70 50 70 Z" fill={THEME.highlight} />
                <path d="M30 50 C20 40 30 20 50 10" fill={THEME.white} fillOpacity="0.5" />
                <path d="M70 50 C80 40 70 20 50 10" fill={THEME.white} fillOpacity="0.5" />
                
                {/* Trunk/Base */}
                <path d="M50 70 L50 90 Q50 98 40 98 M50 90 Q50 98 60 98" stroke={THEME.white} strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col justify-center relative">
              <span className="text-2xl font-bold text-white leading-none z-10 tracking-wide">Kanopy MediCare</span>
              {/* Swoosh Arrow */}
               <svg className="absolute -bottom-2 left-0 w-[110%] h-4 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q50 25 100 5" fill="none" stroke={THEME.highlight} strokeWidth="3" strokeLinecap="round" />
                <path d="M100 5 L92 8 M100 5 L94 12" fill="none" stroke={THEME.highlight} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#4FC3F7] font-bold transition-colors text-sm uppercase tracking-wider relative group"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#4FC3F7] transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[95%] mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-4 flex flex-col gap-3 animate-in slide-in-from-top-2 overflow-hidden z-40">
             {['Home', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white font-bold text-lg hover:text-[#4FC3F7] hover:bg-white/5 px-4 py-3 rounded-lg transition-colors block text-center border-b border-white/10 last:border-0"
                 onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content - Centered over background */}
      <div className="relative z-20 flex-1 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 w-full max-w-[1440px] mx-auto mt-24 md:mt-0 gap-12 md:gap-0">
        
        {/* LEFT SIDE: Text Content */}
        <div className="max-w-3xl flex-1 text-center md:text-left">
          {/* Headline - Word by Word Animation */}
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-6 whitespace-nowrap">
            {headlineWords.map((word, index) => {
              // Highlight logic
              const isHighlight = ["MBBS", "Global", "Doctors"].includes(word.replace(/[^a-zA-Z]/g, ""));
              
              return (
                <span 
                  key={index} 
                  className="inline-block opacity-0 animate-[fadeRise_0.6s_ease-out_forwards]"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    color: isHighlight ? THEME.highlight : 'white'
                  }}
                >
                  {word}&nbsp;
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-sm sm:text-base md:text-lg text-gray-200 mb-10 max-w-2xl opacity-0 animate-[fadeRise_0.6s_ease-out_forwards] leading-relaxed drop-shadow-md mx-auto md:mx-0"
            style={{ animationDelay: '0.7s' }}
          >
            {subText}
          </p>

          {/* CTA Button */}
          <div 
            className="opacity-0 animate-[fadeRise_0.6s_ease-out_forwards]"
            style={{ animationDelay: '0.8s' }}
          >
             <button className="px-10 py-4 rounded-full bg-[#4FC3F7] text-black hover:bg-white hover:text-black transition-all duration-300 font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-[#4FC3F7]/40 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Stats Boxes (Wider Cards) */}
        <div className="relative w-full max-w-[380px] h-[300px] md:h-[480px] flex-shrink-0 hidden md:block opacity-0 animate-[fadeRise_1s_ease-out_forwards]" style={{ animationDelay: '1.0s' }}>
          
          {/* Box 1: Support - Wider & Lower, Left Aligned Text */}
          <div className="absolute top-24 left-0 w-64 h-52 rounded-[30px] border-4 border-white/90 bg-[#4FC3F7]/80 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden group backdrop-blur-sm z-10">
             {/* Background Image Overlay */}
             <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundImage: `url(${STAT_IMAGES.support})` }}></div>
             {/* Content - Left Aligned */}
             <div className="relative z-10 w-full h-full flex flex-col items-start justify-center text-left p-4 pl-8">
                <span className="text-5xl font-extrabold text-white drop-shadow-md mb-4">24/7</span>
                <span className="text-lg font-bold text-white leading-tight pr-4">Support Available</span>
             </div>
          </div>

          {/* Box 2: Satisfaction - Wider & Lower, Left Aligned Text */}
          <div className="absolute bottom-0 right-0 w-64 h-52 rounded-[30px] border-4 border-white/90 bg-[#4FC3F7]/80 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden group backdrop-blur-sm z-0">
             {/* Background Image Overlay */}
             <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundImage: `url(${STAT_IMAGES.satisfaction})` }}></div>
             {/* Content - Left Aligned */}
             <div className="relative z-10 w-full h-full flex flex-col items-start justify-center text-left p-4 pl-8">
                <span className="text-5xl font-extrabold text-white drop-shadow-md mb-4">99%</span>
                <span className="text-lg font-bold text-white leading-tight pr-4">Satisfaction Rate</span>
             </div>
          </div>

        </div>

        {/* Mobile Stats (Stacked) */}
        <div className="md:hidden flex gap-6 mt-4 w-full justify-center pb-10">
             <div className="flex flex-col items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <span className="text-3xl font-bold text-[#4FC3F7] mb-2">24/7</span>
                <span className="text-xs text-white">Support Available</span>
             </div>
             <div className="flex flex-col items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <span className="text-3xl font-bold text-[#4FC3F7] mb-2">99%</span>
                <span className="text-xs text-white">Satisfaction Rate</span>
             </div>
        </div>

      </div>

      {/* Custom Styles for Animations */}
      <style>
        {`
          @keyframes fadeRise {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
