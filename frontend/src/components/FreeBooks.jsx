import React, { useEffect, useState } from "react";
import Book from "./Book";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

const FreeBooks = () => {
  const [freeBook, setFreeBook] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:6969/books");
      const fdata = res.data;
      console.log("Fetched Data:", fdata);

      // Ensure data exists before filtering
      if (Array.isArray(fdata)) {
        const freeBooks = fdata.filter((item) => item.isPaid === false);
        setFreeBook(freeBooks);
      } else {
        console.log("Error: API response is not an array");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="w-full min-h-screen px-4 py-12 bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          📚 Free Offered Courses 🚀
        </h1>
        <p className="text-gray-400 text-lg mt-3 max-w-3xl mx-auto">
          Explore a variety of free books from different genres. Enhance your
          knowledge and imagination at no cost!
        </p>
      </div>

      {/* Check if books exist before rendering Swiper */}
      {freeBook.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full max-w-6xl py-20"
        >
          {freeBook.map((book, index) => (
            <SwiperSlide key={index}>
              <Book book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-lg text-gray-600">📌 No free books available</p>
      )}
    </div>
  );
};

export default FreeBooks;
