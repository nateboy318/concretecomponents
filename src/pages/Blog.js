import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Blog = ({ data }) => {
  const { slug } = useParams(); // slug will be the ID of the post
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (data.blog && slug) {
      // Find the selected blog based on the slug (ID)
      const blog = data.blog.find(
        (blog) => blog.id.toString() === slug // Compare with id
      );
      setSelectedBlog(blog);
    }
  }, [slug, data.blog]);

  if (!selectedBlog) {
    return (
      <div className="min-h-screen max-w-5xl mx-auto flex items-center justify-center">
        <p className="text-white">Loading blog...</p>
      </div>
    );
  }

  const { attributes } = selectedBlog;

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-5 py-36 lg:px-32">
      <div className="flex flex-col w-full mb-8 prose prose-invert prose-md">
        <div className="mb-5 border-b border-gray-700">
          <div className="flex flex-col flex-wrap items-baseline -mt-2">
            <h1 className="text-white text-3xl lg:text-5xl font-bold">
              {attributes.Title}
            </h1>

            <p className="my-6 ml-2 text-gray-400">
              ~ {attributes.ReadingTime} Minute Read
            </p>
          </div>
        </div>
        <div className="prose prose-invert text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold my-6" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold my-5" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-bold my-4" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-xl font-bold my-3" {...props} />
              ),
              h5: ({ node, ...props }) => (
                <h5 className="text-lg font-bold my-2" {...props} />
              ),
              h6: ({ node, ...props }) => (
                <h6 className="text-base font-bold my-1" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="my-4 leading-relaxed" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-400 hover:underline" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside my-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside my-4" {...props} />
              ),
              li: ({ node, ...props }) => <li className="my-2" {...props} />,
              strong: ({ node, ...props }) => (
                <strong className="font-bold" {...props} />
              ),
              em: ({ node, ...props }) => <em className="italic" {...props} />,
              code: ({ node, ...props }) => (
                <code
                  className="bg-gray-800 text-yellow-400 p-1 rounded"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-gray-700 pl-4 italic my-4"
                  {...props}
                />
              ),
              img: ({ node, ...props }) => (
                <img className="my-4 max-w-full h-auto" {...props} />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th className="border-b px-4 py-2 text-left" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="border-b px-4 py-2" {...props} />
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-6 border-gray-700" {...props} />
              ),
            }}
          >
            {attributes.Body}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mt-12 flex flex-col">
        <h2 className="text-white text-4xl lg:text-5xl font-semibold mb-10 mx-auto">
          Other Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.blog &&
            data.blog.map((blog) => {
              // Extract the first 50 words from the body
              const previewText =
                blog.attributes.Body.split(" ").slice(0, 50).join(" ") +
                (blog.attributes.Body.split(" ").length > 50 ? "..." : "");

              return (
                <div
                  key={blog.id}
                  className="bg-black border border-white p-4 w-full  flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {blog.attributes.Title}
                    </h3>
                    <p className="text-gray-300 mb-4">{previewText}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">
                      {blog.attributes.ReadingTime} min read
                    </span>
                    <a
                      href={`/blog/${blog.id}`}
                      className="bg-maroon text-white hover:bg-opacity-65 py-2 px-4 text-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
