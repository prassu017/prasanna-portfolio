import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github, ExternalLink, Code, Brain, Database, Zap, Heart, Users, Mic, MapPin, GraduationCap, Award, Calendar, ArrowRight, Menu, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-slate-900">
              Prasanna Jain<span className="text-black animate-pulse">_</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'interests', label: 'Interests' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-black ${
                    activeSection === item.id ? 'text-black' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#007BFF]"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3 pt-4">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'interests', label: 'Interests' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors duration-200 hover:text-black ${
                      activeSection === item.id ? 'text-black' : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */
      <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Intro */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-black font-medium text-lg">👋 Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Prasanna Jain
              </h1>
              <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed">
                I build scalable data systems and elegant software solutions
              </p>
            </div>

            <div className="flex items-center space-x-2 text-slate-500">
              <MapPin className="w-4 h-4" />
              <span>Seattle, WA</span>
            </div>

            <p className="text-lg text-slate-900 leading-relaxed max-w-lg">
              Data Engineer & AI Entrepreneur passionate about transforming unstructured data 
              into actionable insights at the intersection of AI and financial technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-black text-white rounded-lg border border-black hover:bg-black/90 transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                aria-label="See my work"
              >
                <span>See My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/Prasanna_Jain_Resume.docx"
                download
                className="px-8 py-3 bg-black text-white rounded-lg border border-black hover:bg-black/90 transition-transform duration-200 hover:scale-[1.02] hover:shadow focus:outline-none focus:ring-2 focus:ring-black flex items-center space-x-2"
                aria-label="Download resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right: 16:9 hero image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full h-full min-h-[360px] md:min-h-[420px] rounded-xl overflow-hidden bg-slate-200">
              <img src="/hero-banner.jpg" alt="Professional Headshot" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Scroll arrow */}
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          aria-label="Scroll to projects"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-slate-300 bg-white/80 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </button>
      </section>
/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              A data-driven innovator with 2+ years of experience in engineering large-scale analytics systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg text-slate-900">
                <p>
                  Currently pursuing an MS in Business Analytics at the University of Washington, Foster School of Business. 
                  My passion lies at the intersection of AI, financial technology, and automation.
                </p>
                <p>
                  I thrive on transforming unstructured data into actionable insights and building tools that empower 
                  smarter decision-making. My experience spans from developing ESG sentiment analysis systems to creating 
                  automated B2B lead generation platforms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Skills & Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {[
                    { name: 'Python', icon: Code, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'SQL', icon: Database, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'NLP', icon: Brain, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'Streamlit', icon: Zap, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'Azure', icon: Database, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'Power BI', icon: Code, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'n8n', icon: Zap, color: 'bg-[#007BFF] text-slate-900' },
                    { name: 'Databricks', icon: Brain, color: 'bg-[#007BFF] text-slate-900' }
                  ].map((skill) => (
                    <div key={skill.name} className={`p-4 rounded-xl ${skill.color} text-center hover:scale-105 transition-transform duration-200`}>
                      <skill.icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="font-medium text-sm">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="contents">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-black" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">MS Business Analytics</h4>
                    <p className="text-slate-700 text-sm">University of Washington</p>
                    <p className="text-slate-500 text-sm">Foster School of Business (2025)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">B.Tech Computer Science</h4>
                    <p className="text-slate-700 text-sm">Symbiosis Institute of Technology</p>
                    <p className="text-slate-500 text-sm">Pune, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-black" />
                  Leadership
                </h3>
                <div>
                  <h4 className="font-semibold text-slate-900">Mental Health Committee Director</h4>
                  <p className="text-slate-700 text-sm mb-2">Reverb 2020, Symbiosis</p>
                  <p className="text-slate-900 text-sm">
                    Initiated mental health awareness campaigns reaching 100+ individuals. 
                    Presented research at ALPFA Pre-Convention Workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-700">Building the future, one line of code at a time</p>
          </div>

          <div className="space-y-20">
            {/* Project 1 - ESG Sentiment Agent */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div className="contents">
                <div className="flex items-center space-x-3">
                  <Brain className="w-4 h-4 text-green-600" />
                  <h3 className="text-3xl font-bold text-slate-900">ESG Sentiment Agent</h3>
                </div>
                
                <p className="text-lg text-slate-900 leading-relaxed">
                  An AI-powered web application that analyzes ESG-related news sentiment and quantifies its influence 
                  on stock returns for custom portfolios. Combines NLP, sentiment scoring, financial modeling, and regression analysis.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Python', 'Streamlit', 'YFinance', 'NLP', 'Regression Modeling'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#007BFF] text-slate-900 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Target Users:</h4>
                  <ul className="text-slate-900 space-y-1">
                    <li>• Retail investors</li>
                    <li>• ESG-focused asset managers</li>
                    <li>• Financial analysts</li>
                  </ul>
                </div>

                <a
                  href="https://esg-sentiment-agent-qzkfdnhzr3evlrbxertfaq.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-slate-900 rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-semibold">Launch Live App</span>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="aspect-video bg-slate-50   rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-[1.02] hover:shadow">
                  <div className="text-center text-green-600">
                    <Brain className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-semibold">ESG Sentiment Dashboard</p>
                    <p className="text-sm">Interactive Demo Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Sage AI Platform */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div className="lg:order-2 contents">
                <div className="flex items-center space-x-3">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <h3 className="text-3xl font-bold text-slate-900">Sage AI Platform</h3>
                </div>
                
                <p className="text-lg text-slate-900 leading-relaxed">
                  Founder of a sales automation platform leveraging AI for lead sourcing and outreach. Built a scalable 
                  web-scraping + email automation workflow that identifies decision-makers, scrapes contact info, 
                  and dispatches personalized cold emails.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['n8n', 'Web Scraping', 'Email Automation', 'AI', 'Node.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#007BFF] text-slate-900 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Target Users:</h4>
                  <ul className="text-slate-900 space-y-1">
                    <li>• B2B SaaS companies</li>
                    <li>• Sales teams</li>
                    <li>• Marketing agencies</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://lovable.dev/projects/39c5f94a-4476-4bc4-8155-bd5c77df2713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-slate-900 rounded-lg hover:bg-purple-700 transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-semibold">View Prototype</span>
                  </a>
                  <a
                    href="https://lovable.dev/projects/17686af8-9be1-4038-9f09-adc136c7da31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-semibold">Alternative Demo</span>
                  </a>
                </div>
              </div>

              <div className="lg:order-1 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="aspect-video bg-slate-50   rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-[1.02] hover:shadow">
                  <div className="text-center text-purple-600">
                    <Zap className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-semibold">AI Lead Generation</p>
                    <p className="text-sm">Automation Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
            <p className="text-xl text-slate-700">My professional journey in data engineering and AI</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-slate-900" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">MS Business Analytics Student</h3>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2024 - 2025
                      </span>
                    </div>
                    <p className="text-black font-medium mb-3">University of Washington, Foster School of Business</p>
                    <p className="text-slate-900">
                      Focusing on advanced analytics, machine learning, and business intelligence. 
                      Developing expertise in financial modeling and AI applications in business contexts.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-slate-900" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">Data Engineer</h3>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2022 - 2024
                      </span>
                    </div>
                    <p className="text-green-600 font-medium mb-3">Large-Scale Analytics Systems</p>
                    <p className="text-slate-900">
                      2+ years of experience engineering scalable data pipelines, implementing ETL processes, 
                      and building analytics infrastructure. Specialized in transforming unstructured data 
                      into actionable business insights.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-slate-900" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">Mental Health Committee Director</h3>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2020
                      </span>
                    </div>
                    <p className="text-purple-600 font-medium mb-3">Reverb 2020, Symbiosis</p>
                    <p className="text-slate-900">
                      Led mental health awareness initiatives reaching 100+ individuals. 
                      Presented research findings at ALPFA Pre-Convention Workshops, 
                      demonstrating leadership in social impact and public speaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */
      <section id="interests" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Beyond Code</h2>
            <p className="text-xl text-slate-700">The human side of a data engineer</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: four topic cards (2x2 on md+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-black" />
                  Tech & Innovation
                </h3>
                <ul className="space-y-3 text-slate-900">
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Hackathons</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full"></div><span>AI Ethics Research</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-purple-600 rounded-full"></div><span>Open Source Contributing</span></li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Leadership & Community
                </h3>
                <ul className="space-y-3 text-slate-900">
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Model United Nations</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full"></div><span>Public Speaking</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-purple-600 rounded-full"></div><span>Mentoring Students</span></li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Personal Interests
                </h3>
                <ul className="space-y-3 text-slate-900">
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Football</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full"></div><span>Tech Blogging</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-purple-600 rounded-full"></div><span>Photography</span></li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Mic className="w-5 h-5 mr-2 text-orange-600" />
                  Speaking & Writing
                </h3>
                <ul className="space-y-3 text-slate-900">
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Conference Talks</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-green-600 rounded-full"></div><span>Technical Writing</span></li>
                  <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-purple-600 rounded-full"></div><span>Workshop Facilitation</span></li>
                </ul>
              </div>
            </div>

            {/* Right: casual photos 4:3 side-by-side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200">
                  <img src="/casual-1.jpg" alt="Casual 1" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200">
                  <img src="/casual-2.jpg" alt="Casual 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Build Cool Stuff Together</h2>
            <p className="text-xl text-slate-700">
              Ready to collaborate on your next data project or AI innovation?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:prassu017@gmail.com"
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-200 hover:scale-105 border border-slate-200"
            >
              <Mail className="w-12 h-12 text-black mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-700">prassu017@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/prasanna-jain-164656222/" target="_blank" rel="noopener noreferrer"
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-200 hover:scale-105 border border-slate-200"
            >
              <Linkedin className="w-12 h-12 text-black mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">LinkedIn</h3>
              <p className="text-slate-700">Connect with me</p>
            </a>

            <a
              href="https://github.com/prassu017" target="_blank" rel="noopener noreferrer"
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-200 hover:scale-105 border border-slate-200"
            >
              <Github className="w-12 h-12 text-black mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">GitHub</h3>
              <p className="text-slate-700">View my code</p>
            </a>
          </div>

          <div className="flex justify-center">
            <a href="/Prasanna_Jain_Resume.docx" download className="px-8 py-3 bg-black text-white rounded-lg border border-black hover:bg-black/90 transition-transform duration-200 hover:scale-[1.02] hover:shadow focus:outline-none focus:ring-2 focus:ring-black flex items-center space-x-2" aria-label="Download resume">
  <span>Download Resume</span>
</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              Built with love & VS Code. Last updated 2025.
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Prasanna Jain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;