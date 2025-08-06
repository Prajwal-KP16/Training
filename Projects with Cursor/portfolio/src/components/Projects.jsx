import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Blog Post App',
      description: 'Blog Post App is a simple blog post application that allows users to create, read, update, and delete blog posts. It is built with JavaScript, HTML, CSS and React.',
      image: 'https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A simple task management application with CRUD operations, built to learn React fundamentals and state management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React', 'LocalStorage', 'CSS3'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that displays current weather conditions using a weather API. Built to practice API integration and async JavaScript.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and dark mode.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'E-Commerce Website',
      description: 'A responsive e-commerce website built with React and Node.js. Features include product listing, user authentication, and shopping cart functionality.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },    
    {
      id: 6,
      title: 'Student Management System',
      description: 'A simple student management system built with Python and SQLite. Features include adding, updating, and deleting student records.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Python', 'SQLite', 'Tkinter'],
      category: 'desktop',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filters = [
    { name: 'all', label: 'All Projects' },
    { name: 'web', label: 'Web Apps' },
    { name: 'desktop', label: 'Desktop Apps' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on during my academic journey and personal learning. 
            Each project represents my growth and learning in different technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.name
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-400 hover:text-purple-400 border border-gray-600 hover:border-purple-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-effect rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-purple-400 text-purple-400 text-center py-2 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 