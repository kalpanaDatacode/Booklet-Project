import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../../store/bookSlice";
import { useNavigate } from "react-router-dom";

const CreateBookCard = ({ logo, heading, btntext, label1, label2, label3 }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [chapters, setChapters] = useState("");
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !chapters) return;

    const newBook = {
      id: editId || Date.now(),
      title,
      author,
      chapters: Number(chapters),
      completedChapters: 0,
      image: "continuereading.png",
      description: `A book about ${title}`,
    };

    if (editId) {
      dispatch(updateBook(newBook));
      setEditId(null);
    } else {
      dispatch(addBook(newBook));
    }

    setTitle("");
    setAuthor("");
    setChapters("");
    navigate("/collections");
  };

  return (
    <section>
      <div className="create-book-card row mx-0 vh-100 vw-100 bg-dark d-flex justify-content-center align-items-center">
        <div className="card-container col-12 col-md-5 p-4">
          <div className="text-center mb-3">
            <img src={logo} alt="BookLet Logo" className="logo" />
          </div>
          <h2 className="text-white fw-semibold mb-4 text-center">{heading}</h2>

          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              className="form-control custom-input mb-3"
              type="text"
              placeholder={label1}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="form-control custom-input mb-3"
              type="text"
              placeholder={label2}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              className="form-control custom-input mb-3"
              type="number"
              placeholder={label3}
              value={chapters}
              onChange={(e) => setChapters(e.target.value)}
            />

            <button
              type="submit"
              className={`btn ${editId ? "btn-success" : "btn-primary"} w-100`}
            >
              {editId ? "Update Book" : btntext}
            </button>
          </form>

          <button
            className="btn btn-secondary mt-3"
            onClick={() => navigate("/collections")}
          >
            Back to Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateBookCard;
