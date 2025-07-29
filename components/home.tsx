import React from 'react';

const Home = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 pt-6 pb-0 sm:px-6 sm:pt-8 sm:pb-0 lg:px-8 lg:pt-10 lg:pb-0">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Bridge the gap between learners and
            <strong className="text-indigo-600"> educators </strong>
            effectively
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            BRIDGE helps you transform your study materials into interactive quizzes.
            Upload slides, notes, or topics and generate instant questions to boost engagement and retention.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Generate quiz
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#"
            >
              Upload presentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
