import React from "react";

const ComicsSection = ({ comics, onComicClick }) => {
  if (!comics) return null;

  return (
    <div className="mt-2 bg-dark">
      <h2 className="p-3 text-white">Top Rated Comics</h2>
      <div className="row mx-0">
        {comics.map((comic, index) => (
          <div
            key={index}
            className="col-6 col-md-3 text-white"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (onComicClick) {
                onComicClick({
                  title: comic.title,
                  author: comic.author.replace(/^by\s/, ""),
                  chapters: comic.chapters,
                  completedChapters: comic.completedChapters || 0,
                  image: comic.img,
                  description: comic.description || "",
                });
              }
            }}
          >
            <div className="d-flex flex-column align-items-start p-2">
              <img
                className="comic-img img-fluid rounded mb-2"
                src={comic.img}
                alt={comic.title}
              />
              <h6 className="mb-1 text-primary">{comic.title}</h6>
              <p className="text-secondary small mb-0">{comic.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicsSection;
