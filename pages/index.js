import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chandan Malakar | Data Scientist & ML Engineer</title>
        <meta name="description" content="Chandan Malakar's portfolio - Data Scientist and Machine Learning Engineer. Discover innovative ML projects, data insights, and AI solutions for real-world problems." />
        {/* ...existing meta tags... */}
      </Head>

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 bg-[#E9E9E9] dark:bg-[#232323]">
        <div className="max-w-3xl w-full text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Hey, I'm Chandan Malakar
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Data Scientist & ML Engineer
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              I transform data into actionable insights and build scalable ML/AI solutions for real-world challenges. Passionate about innovation, continuous learning, and creating meaningful impact through data science.
            </p>
            <div className="space-y-4">
              <p>
                Currently working as a Data Analyst Intern at{' '}
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  href="https://www.linkedin.com/company/unidif-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UNIDIF Consulting
                </a>{' '}
                for JACO Manufacturing Industry, where I develop data-driven solutions for manufacturing optimization.
              </p>
              <p>
                My technology stack includes <strong>Python</strong>, <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>scikit-learn</strong>, <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>SQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>Docker</strong>, and <strong>AWS</strong>.
              </p>
            </div>
            <p>
              I'm passionate about discussing <strong className="text-blue-600 dark:text-blue-400">Machine Learning, Deep Learning, Data Analytics, AI Ethics, Statistical Modeling</strong>, or innovative data solutions.
            </p>
            <p>
              Let's connect on{' '}
              <a
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/chandan6209"
              >
                Twitter
              </a>{' '}
              or{' '}
              <a
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/chandanmalakar"
              >
                LinkedIn
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="/contact">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors">
                Get In Touch
              </button>
            </a>
            <button 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-[#2c2c2c] hover:bg-gray-50 dark:hover:bg-[#3a3a3a] transition-colors"
              onClick={() => window.open('mailto:chandanmalakar7549@gmail.com', '_blank')}
            >
              <span className="mr-2">📧</span>
              Email Me
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
