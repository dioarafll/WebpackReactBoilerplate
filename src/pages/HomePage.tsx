import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import { increment, decrement } from '../stores/slices/counterSlice';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      {' '}
      {/* This div is the single parent element wrapping all JSX */}
      <Helmet>
        <title>My Webpack React Redux TypeScript Project</title>
        <meta
          name="description"
          content="A starter template for React, Redux, and TypeScript using Webpack."
        />
        <meta
          name="keywords"
          content="React, Redux, TypeScript, Webpack, SEO"
        />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="My Webpack React Redux TypeScript Project"
        />
        <meta
          property="og:description"
          content="A starter template for React, Redux, and TypeScript using Webpack."
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="My Webpack React Redux TypeScript Project"
        />
        <meta
          name="twitter:description"
          content="A starter template for React, Redux, and TypeScript using Webpack."
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
        <meta name="twitter:url" content="https://your-website-url.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "My Webpack React Redux TypeScript Project",
              "description": "A starter template for React, Redux, and TypeScript using Webpack.",
              "url": "https://your-website-url.com",
              "author": {
                "@type": "Person",
                "name": "Your Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Organization"
              },
              "image": "https://example.com/og-image.jpg"
            }
          `}
        </script>
      </Helmet>
      <div className="relative overflow-hidden bg-gray-100 dark:bg-neutral-800">
        {/* Hero Section */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl lg:text-6xl transition-all duration-300">
              Webpack React Redux TypeScript Starter
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400 sm:text-xl">
              A modern starter template for building React applications with
              Redux, TypeScript, and TailwindCSS.
            </p>
          </div>

          {/* Counter Section */}
          <div className="mt-12 flex justify-center gap-6">
            <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg p-6 w-full sm:w-1/2 lg:w-1/3 transition-all transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Counter
              </h2>
              <div className="flex items-center justify-center gap-4">
                <button
                  className="p-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
                  onClick={handleIncrement}
                >
                  Increment
                </button>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  {counter}
                </p>
                <button
                  className="p-4 text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300"
                  onClick={handleDecrement}
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-x-2 bg-gray-900 text-white text-sm font-medium py-3 px-4 rounded-md shadow-md hover:bg-gray-800 transition duration-300 transform hover:scale-105"
            >
              Visit GitHub
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
