import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Master Code Art Today
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Learn to create stunning visual code projects from industry experts.
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            Why Learn Code Art With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="text-purple-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm8 4H7v6h6V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-center">Interactive Projects</h3>
              <p className="text-center mt-4 text-gray-500">
                Work on real-world projects and create stunning visuals using code.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="text-purple-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-4a1 1 0 110-2 1 1 0 010 2zm1-10H9v5h2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-center">Expert Instructors</h3>
              <p className="text-center mt-4 text-gray-500">
                Learn from professionals who excel in the intersection of art and coding.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="text-purple-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm8 4H7v6h6V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-center">Flexible Learning</h3>
              <p className="text-center mt-4 text-gray-500">
                Learn at your own pace with self-guided and instructor-led courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Course 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Introduction to Code Art</h3>
              <p className="text-gray-500 mt-4">
                Learn the basics of combining programming with art to create beautiful projects.
              </p>
              <a href="/" className="text-purple-500 font-semibold mt-6 block">
                View Course
              </a>
            </div>

            {/* Course 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Generative Art with JavaScript</h3>
              <p className="text-gray-500 mt-4">
                Discover how to use JavaScript to create interactive and generative art.
              </p>
              <a href="/" className="text-purple-500 font-semibold mt-6 block">
                View Course
              </a>
            </div>

            {/* Course 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Creative Coding with P5.js</h3>
              <p className="text-gray-500 mt-4">
                Master the P5.js library and bring your artistic ideas to life through code.
              </p>
              <a href="/" className="text-purple-500 font-semibold mt-6 block">
                View Course
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-700 mb-4">
                "The Code Art platform helped me take my coding and creativity to the next level!"
              </p>
              <p className="font-bold text-gray-900">- Alex R., Student</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-700 mb-4">
                "The lessons are engaging and the instructors are really knowledgeable."
              </p>
              <p className="font-bold text-gray-900">- Jamie P., Designer</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-700 mb-4">
                "Learning to create art with code was such a rewarding experience."
              </p>
              <p className="font-bold text-gray-900">- Chris T., Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Join Code Art Today</h2>
                   <a
            href="/"
            className="inline-block px-8 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default HomePage;

