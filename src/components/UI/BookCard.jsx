import React from "react";

const BookCard = ({ image, title, date }) => {
  return (
    <div className="book-card p-0 rounded h-100">
      <div className="row mx-0 gap-md-2">
        <div className="col-12 col-md-12">
          <div className="book-card-image rounded-3 overflow-hidden w-100">
            <img
              src={image}
              alt={title}
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        <div className="col-12 text-center text-white">
          <h6 className="mb-1">{title}</h6>
          <small className="text-primary">{date}</small>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
