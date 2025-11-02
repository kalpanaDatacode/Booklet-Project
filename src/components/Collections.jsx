import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookCard from "./UI/BookCard";
import SideNavbar from "./UI/SideNavbar";
import ContinueReadingCard from "./UI/ContinueReadingCard";
import ComicsSection from "./UI/ComicsSection";
import { FaBell, FaTools } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { setSelectedBook } from "../store/bookSlice";

const Collections = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const books = useSelector((state) => state.books.list);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const staticBooks = [
    { id: 101, title: "Atomic Habits", author: "James Clear", chapters: 20, image: "continuereading.png" },
    { id: 102, title: "Deep Work", author: "Cal Newport", chapters: 15, image: "continuereading.png" },
    { id: 103, title: "The Alchemist", author: "Paulo Coelho", chapters: 18, image: "continuereading.png" },
  ];

  const dynamicImages = ["titans.png", "flash.png", "harley.png", "suicidesquad.png"];
  const handleBookClick = (book, completed = false) => {
    if (completed) book.completedChapters = book.chapters;
    dispatch(setSelectedBook(book));
    navigate("/bookpage");
  };

  const dynamicComics = filteredBooks.map((book, index) => ({
    img: dynamicImages[index % dynamicImages.length],
    title: book.title,
    author: `by ${book.author}`,
    chapters: book.chapters,
    completedChapters: book.completedChapters || 0,
    onClick: () => handleBookClick(book),
  }));

  const staticComics = [
    {
      img: "flash.png",
      title: "The Flash, Vol.1",
      author: "Joshua Williamson",
      chapters: 10,
      completedChapters: 0,
      onClick: () =>
        handleBookClick({
          title: "The Flash, Vol.1",
          author: "Joshua Williamson",
          chapters: 10,
          completedChapters: 0,
          image: "flash.png",
        }),
    },
    {
      img: "titans.png",
      title: "Titans Vol.2",
      author: "Andrew Robinson",
      chapters: 12,
      completedChapters: 0,
      onClick: () =>
        handleBookClick({
          title: "Titans Vol.2",
          author: "Andrew Robinson",
          chapters: 12,
          completedChapters: 0,
          image: "titans.png",
        }),
    },
    {
      img: "harley.png",
      title: "Harley Quinn, Vol.1",
      author: "Jimmy Palmiotti",
      chapters: 8,
      completedChapters: 0,
      onClick: () =>
        handleBookClick({
          title: "Harley Quinn, Vol.1",
          author: "Jimmy Palmiotti",
          chapters: 8,
          completedChapters: 0,
          image: "harley.png",
        }),
    },
    {
      img: "suicidesquad.png",
      title: "Suicide Squad #8",
      author: "Tom Taylor",
      chapters: 9,
      completedChapters: 0,
      onClick: () =>
        handleBookClick({
          title: "Suicide Squad #8",
          author: "Tom Taylor",
          chapters: 9,
          completedChapters: 0,
          image: "suicidesquad.png",
        }),
    },
  ];

  const allComics = [...dynamicComics, ...staticComics];

  return (
    <section className="collections-section bg-dark">
      <div className="collections-container text-white min-vh-100 position-relative">
        <div className="row mx-0 h-100 flex-column flex-md-row">
          <SideNavbar />

          <div className="col-12 col-md-9 bg-dark p-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-4 gap-3">
              <input
                type="search"
                className="form-control search-input text-white"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="d-flex gap-3 align-items-center">
                <button
                  className="btn btn-success"
                  style={{ width: "200px" }}
                  onClick={() => navigate("/createbook")}
                >
                  + Add Book
                </button>
                <FaBell size={20} />
                <img
                  src="Ellipse1.png"
                  alt="profile"
                  className="profile-img rounded-circle"
                  onClick={() => setShowProfile(!showProfile)}
                />
              </div>
            </div>

            {showProfile && (
              <div
                className="profile-overlay d-flex justify-content-end align-items-start"
                onClick={() => setShowProfile(false)}
              >
                <div
                  className="profile-card text-white rounded p-3 pb-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h6 className="mb-2">Kalpana Patidar</h6>
                  <p className="mb-1">
                    Status: <span className="text-success fw-bold">Active</span>
                  </p>
                </div>
              </div>
            )}
            <div className="row align-items-start mb-4">
              <div className="col-12 col-sm-6 col-md-8 mb-3 mb-md-0">
                <div className="completed-read p-4 rounded h-100">
                  <h4 className="text-white mb-3">Completed Read</h4>
                  <div className="row mx-0 gap-1">
                    {staticBooks.map((book) => (
                      <div
                        className="col-6 col-sm-4 col-md-3"
                        key={book.id}
                        onClick={() => handleBookClick(book, true)}
                        style={{ cursor: "pointer" }}
                      >
                        <BookCard
                          image={book.image}
                          title={book.title}
                          date={`${book.chapters} chapters by ${book.author}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div
                  className="continue-reading-wrapper p-3 rounded h-100 d-flex align-items-center justify-content-center"
                  onClick={() =>
                    handleBookClick({
                      title: "Kobra Kai: Ultimate",
                      author: "Unknown",
                      chapters: 39,
                      image: "continuereading.png",
                      description: "A thrilling story about martial arts rivalry.",
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  <ContinueReadingCard
                    baseImage="continuereading.png"
                    title="Kobra Kai: Ultimate"
                    progress={39}
                  />
                </div>
              </div>
            </div>

            <ComicsSection
              comics={allComics}
              onComicClick={(book) => handleBookClick(book)}
            />
          </div>

          <div className="row mx-0 d-md-none bg-dark text-white p-3 border-top border-secondary mt-3">
            <div className="col d-flex flex-column align-items-center">
              <FaTools size={20} className="mb-1" />
              <small>Settings</small>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <FaArrowRightFromBracket size={20} className="mb-1" />
              <small>Log out</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
