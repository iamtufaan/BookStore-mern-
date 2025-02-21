import React from "react";
import list from "../list.json";
import Book from "../components/Book";


const Courses = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-red-200 to-green-200 px-6 py-24">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          📘 Explore Our Courses 🚀
        </h1>
        <p className="text-white text-lg mt-3 max-w-3xl mx-auto">
          Browse through our collection of amazing books and courses, designed
          to enhance your knowledge and skills!
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4  mx-auto">
        {list.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
