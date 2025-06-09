import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Chandan Malakar - Data Scientist</title>
        <meta name="description" content="Get in touch with Chandan Malakar for data science projects, collaborations, or consulting opportunities." />
      </Head>

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 bg-[#E9E9E9] dark:bg-[#232323]">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary dark:text-white">
            Let's Connect
          </h1>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            I'm always excited to discuss data science projects, machine learning opportunities, or potential collaborations. Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Direct Contact Section */}
            <div className="space-y-4 text-left">
              <h2 className="text-xl font-semibold text-primary dark:text-white">Direct Contact</h2>
              <div className="space-y-3">
                <a href="mailto:chandanmalakar7549@gmail.com" className="flex items-center space-x-3 text-primary dark:text-white hover:underline">
                  <span>📧</span>
                  <span>chandanmalakar7549@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-4 text-right">
              <h2 className="text-xl font-semibold text-primary dark:text-white">Social Media</h2>
              <div className="space-y-3">
                <a href="https://linkedin.com/in/chandanmalakar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end space-x-3 text-primary dark:text-white hover:underline">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/chandan6209" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end space-x-3 text-primary dark:text-white hover:underline">
                  <span>𝕏</span>
                  <span>Twitter</span>
                </a>
                <a href="https://github.com/askchandan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end space-x-3 text-primary dark:text-white hover:underline">
                  <span>💻</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          {/* What I Can Help With Section */}
          <div className="mt-8 p-6 rounded-lg text-justify bg-[#FFFFFF] dark:bg-[#1f1f1f]">
            <h3 className="text-lg font-semibold mb-3 text-primary dark:text-white">What I can help with:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Data Science Consulting</li>
              <li>Machine Learning Projects</li>
              <li>Data Analytics & Visualization</li>
              <li>AI Solution Development</li>
              <li>Technical Writing & Content</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
