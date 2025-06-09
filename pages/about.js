import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Chandan Malakar - Data Scientist</title>
        <meta name="description" content="Learn more about Chandan Malakar's journey in data science, machine learning, and AI development." />
      </Head>

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm Chandan Malakar, a passionate Data Scientist and Machine Learning Engineer with a deep love for transforming raw data into meaningful insights that drive business decisions.
          </p>
          <div className="space-y-6 text-left">
            <h2 className="text-2xl font-semibold text-primary dark:text-white">
              My Expertise
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Machine Learning & Deep Learning</li>
              <li>Data Analytics & Visualization</li>
              <li>Statistical Modeling & Predictive Analytics</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>MLOps & Model Deployment</li>
            </ul>
            <h2 className="text-2xl font-semibold text-primary dark:text-white">
              Current Focus
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Currently working as a Data Analyst Intern at UNIDIF Consulting for JACO Manufacturing Industry, where I develop data-driven solutions for manufacturing optimization and process improvement.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
