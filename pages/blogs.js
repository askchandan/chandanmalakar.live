import Head from 'next/head'

export default function Blogs() {
  const blogs = [
    {
      title: "Seaborn: Stories of Imagination and Visualization",
      slug: "seaborn-stories",
      excerpt: "A deep dive into data visualization using Seaborn, exploring its capabilities and creative applications.",
      link: "https://chandanmalakar.medium.com/seaborn-stories-of-imagination-and-visualization-1e4953174f24",
      date: "2025-01-01",
      readTime: "5 min read",
      tags: ["Data Visualization", "Seaborn", "Python"]
    },
    {
      title: "Limitless Farming",
      slug: "limitless-farming",
      excerpt: "Exploring the intersection of AI and agriculture, and how technology is revolutionizing farming practices.",
      link: "https://delve-deeper.hashnode.dev/limitless-farming",
      date: "2025-01-15",
      readTime: "8 min read",
      tags: ["AI", "Agriculture", "Technology"]
    }
  ]

  return (
    <>
      <Head>
        <title>Blogs | Chandan Malakar - Data Scientist</title>
        <meta name="description" content="Read Chandan Malakar's insights on data science, machine learning, and AI development." />
      </Head>

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 bg-[#E9E9E9] dark:bg-[#232323]">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            Blogs
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Thoughts and insights on data science, machine learning, and the future of AI.
          </p>
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <article key={index} className="p-6 rounded-lg hover:shadow-lg transition-shadow bg-[#FFFFFF] dark:bg-[#1f1f1f]">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-primary dark:text-white hover:underline">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a>
                  </h2>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary dark:text-white hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
