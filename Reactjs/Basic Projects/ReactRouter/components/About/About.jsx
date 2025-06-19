import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://www.svgrepo.com/show/452092/react.svg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              What is reactjs and How it works? An Overview and Its Use
              ...ReactJS is a JavaScript library, not a programming language,
              used for building user interfaces, especially for single-page
              applications. It focuses on the view layer of web applications,
              allowing developers to create interactive and dynamic UI
              components efficiently. React is known for its component-based
              architecture, virtual DOM, and ability to handle complex UIs with
              reusable components.
            </p>
            <p className="mt-4 text-gray-600">
              React (also known as React. js or ReactJS) is a free and
              open-source front-end JavaScript library that aims to make
              building user interfaces based on components more "seamless". It
              is maintained by Meta (formerly Facebook) and a community of
              individual developers and companies. React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
