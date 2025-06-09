import Head from 'next/head'

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "UNIDIF Consulting",
      period: "2025 - Present",
      location: "India",
      description: "Developing data-driven solutions for JACO Manufacturing Industry, focusing on manufacturing optimization and process improvement.",
      skills: ["Python", "SQL", "Data Analytics", "Manufacturing Analytics", "Seaborn", "Matplotlib", "NumPy"]
    }
  ]

  return (
    <>
      <Head>
        <title>Experience | Chandan Malakar - Data Scientist</title>
        <meta name="description" content="Chandan Malakar's professional experience in data science, machine learning, and analytics roles." />
      </Head>

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 bg-[#E9E9E9] dark:bg-[#232323]">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            My Experience
          </h1>
          <div className="space-y-6 text-left">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 rounded-lg bg-[#FFFFFF] dark:bg-[#1f1f1f] shadow-md">
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-semibold text-primary dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-medium text-primary dark:text-white">
                      {exp.company}
                    </h4>
                    <span className="text-gray-600 dark:text-gray-300">•</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
