import Head from 'next/head'

export default function Projects() {
  const projects = [
    {
      title: "Laptop Price Prediction",
      description: "Predict laptop prices using machine learning models based on various features.",
      tech: ["Python", "Streamlit", "scikit-learn"],
      link: "https://chandan-laptop-price-prediction.streamlit.app/",
      type: "ML"
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Analyze Twitter sentiments using NLP techniques and machine learning models.",
      tech: ["Python", "Streamlit", "NLTK"],
      link: "https://chandan-twitter-sentiment-analysis.streamlit.app/",
      type: "NLP"
    }
  ]

  return (
    <>
      <Head>
        <title>Projects | Chandan Malakar - Data Scientist</title>
        <meta name="description" content="Explore Chandan Malakar's data science and machine learning projects, including AI solutions and analytics platforms." />
      </Head>

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 bg-[#E9E9E9] dark:bg-[#232323]">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here are some of the projects I've built and contributed to in the field of data science and machine learning.
          </p>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded-lg hover:shadow-lg transition-shadow bg-[#FFFFFF] dark:bg-[#1f1f1f]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-left mt-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary dark:text-white hover:underline mt-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
