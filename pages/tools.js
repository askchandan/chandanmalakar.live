import Head from 'next/head'

const tools = [
  {
    name: "ChatGPT",
    logo: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png",
    darkLogo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
  },
  {
    name: "Jupyter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
  },
  {
    name: "PyCharm",
    logo: "https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png"
  },
  {
    name: "Medium",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
    darkLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },
  {
    name: "scikit-learn",
    logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png"
  },
  {
    name: "Seaborn",
    logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
  },
  {
    name: "OpenCV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Tableau",
    logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
  },
  {
    name: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
  }
]

export default function Tools() {
  return (
    <>
      <Head>
        <title>Tools & Technologies | Chandan Malakar</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-full px-4 py-12 bg-[#E9E9E9] dark:bg-[#232323]">
        <div className="max-w-5xl w-full">
          <div className="text-center space-y-8 mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">Tools & Technologies</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">A selection of my favorite tools for Data Science, ML, AI, and productivity.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center rounded-2xl shadow-md p-6 hover:shadow-xl transition group bg-[#FFFFFF] dark:bg-[#1f1f1f]"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f5f5f5] dark:bg-[#232323] mb-3 border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform">
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-12 h-12 object-contain dark:hidden" 
                  />
                  {tool.darkLogo && (
                    <img 
                      src={tool.darkLogo} 
                      alt={tool.name} 
                      className="w-12 h-12 object-contain hidden dark:block" 
                    />
                  )}
                  {!tool.darkLogo && (
                    <img 
                      src={tool.logo} 
                      alt={tool.name} 
                      className="w-12 h-12 object-contain hidden dark:block" 
                    />
                  )}
                </div>
                <span className="text-gray-900 dark:text-white text-base font-medium mt-1">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
