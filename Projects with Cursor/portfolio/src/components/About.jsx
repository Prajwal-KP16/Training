import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills')

  const skills = [
    { name: 'React', level: 85, color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-400' },
    { name: 'HTML/CSS', level: 90, color: 'from-purple-400 to-pink-400' },
    { name: 'Java', level: 85, color: 'from-green-400 to-emerald-400' },
    { name: 'Spring Boot', level: 70, color: 'from-blue-500 to-indigo-500' },
    { name: 'MySQL', level: 75, color: 'from-red-400 to-pink-400' }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Dayananda Sagar College of Engineering',
      period: '2019 - 2023'
    },
    {
      degree: 'Alva\'s PU College',
      institution: 'Mangalore',
      period: '2017 - 2019',
      description: 'Completed my pre-university studies with a strong foundation in mathematics and science.'
    }
  ]

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent academic performance throughout my studies'
    },
    {
      title: 'Project Showcase',
      description: 'Successfully completed multiple academic and personal projects'
    },
    {
      title: 'Technical Skills',
      description: 'Developed proficiency in modern web technologies and programming languages'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate fresher developer with a strong foundation in computer science and a drive to learn and grow in the tech industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a recent graduate with a passion for technology and software development. 
                During my academic journey, I've developed a strong foundation in programming fundamentals, 
                data structures, and modern web technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm excited to start my professional journey and contribute to innovative projects. 
                I'm a quick learner, team player, and always eager to take on new challenges and technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4">
              <div className="glass-effect rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text">Fresh</div>
                <div className="text-gray-400">Graduate</div>
              </div>
              {/* <div className="glass-effect rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Skills & Education */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                Education
              </button>
            </div>

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Education & Achievements</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-purple-400 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <span className="text-sm text-purple-400">{edu.period}</span>
                      </div>
                      <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  ))}
                  
                  {/* Achievements */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="text-purple-400 font-medium">{achievement.title}</h5>
                            <p className="text-gray-300 text-sm">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 