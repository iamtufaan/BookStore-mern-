import React from "react";
import list from "../list.json";
import Book from "./Book";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FreeBooks = () => {
  const freeBook = list.filter((item) => item.isPaid === false);

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

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-6xl py-20 "
      >
        {freeBook.map((book, index) => (
          <SwiperSlide key={index}>
            <Book book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FreeBooks;
