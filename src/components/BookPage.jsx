import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaBell,
  FaTools,
  FaPlus,
  FaEdit,
  FaCommentDots,
} from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import SideNavbar from "./UI/SideNavbar";
import ContinueReadingCard from "./UI/ContinueReadingCard";
import Modal from "react-modal";

Modal.setAppElement("#root");

const BookPage = () => {
  const [chapters, setChapters] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false); 

  const [newChapter, setNewChapter] = useState({
    name: "",
    description: "",
    date: "",
    status: "Pending",
  });

  const [editChapter, setEditChapter] = useState(null);
  const [statusChapter, setStatusChapter] = useState(null);

  const book = useSelector((state) => state.books.selectedBook);

  if (!book)
    return (
      <div className="bg-dark text-white text-center min-vh-100 d-flex flex-column justify-content-center">
        <h2>No Book Selected</h2>
        <p>Please go back to Collections and select a book.</p>
      </div>
    );

  const chapterCount = chapters.length;
  const completedCount = chapters.filter((c) => c.status === "Completed").length;
  const progress =
    chapterCount === 0 ? 0 : (completedCount / chapterCount) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChapter((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddChapter = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newEntry = {
      id,
      name: newChapter.name || `Chapter ${chapterCount + 1}`,
      description: newChapter.description || "No description provided.",
      date: newChapter.date || new Date().toISOString().slice(0, 10),
      status: newChapter.status,
    };
    setChapters((prev) => [...prev, newEntry]);
    setNewChapter({ name: "", description: "", date: "", status: "Pending" });
    setModalIsOpen(false);
  };

  const handleEditClick = (chapter) => {
    setEditChapter({ ...chapter });
    setEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditChapter((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setChapters((prev) =>
      prev.map((c) => (c.id === editChapter.id ? editChapter : c))
    );
    setEditModalOpen(false);
  };

  const handleStatusClick = (chapter) => {
    setStatusChapter({ ...chapter });
    setStatusModalOpen(true);
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setStatusChapter((prev) => ({ ...prev, status: value }));
  };

  const handleStatusSubmit = (e) => {
    e.preventDefault();
    setChapters((prev) =>
      prev.map((c) => (c.id === statusChapter.id ? statusChapter : c))
    );
    setStatusModalOpen(false);
  };

  return (
    <section className="bookpage bg-dark text-white min-vh-100 position-relative">
      <div className="row mx-0 h-100 flex-column flex-md-row">
        <SideNavbar />

        <div className="col-12 col-md-9 bg-dark p-4 position-relative">
          <div className="row mx-0 align-items-center mb-4 position-relative">
            <div className="col-12 col-md-10">
              <input
                type="search"
                className="form-control bg-dark border border-1 text-white"
                placeholder="Search..."
              />
            </div>

            <div className="col-12 col-md-2 d-flex justify-content-md-end align-items-center mt-3 mt-md-0 position-relative">
              <FaBell size={20} className="me-3" />
              <div className="position-relative">
                <img
                  src="Ellipse1.png"
                  alt="profile"
                  className="profile-img rounded-circle"
                  onClick={() => setShowProfile(!showProfile)}
                  style={{ cursor: "pointer", width: "40px", height: "40px" }}
                />

                {showProfile && (
                  <div
                    className="position-absolute end-0 mt-2 bg-dark border border-secondary rounded p-3 shadow"
                    style={{ width: "230px", zIndex: 10 }}
                  >
                    <h6 className="mb-1 text-white">Kalpana Patidar</h6>
                    <p className="mb-2 small">
                      Status:{" "}
                      <span className="fw-bold text-success">Active</span>
                    </p>
                    <hr className="border-secondary" />
                    <button
                      className="btn btn-sm btn-outline-light w-100"
                      onClick={() => setShowProfile(false)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="row mx-0">
              <div className="col-md-8">
                <h1>{book.title}</h1>
                <p className="text-secondary mb-3">by {book.author}</p>
                <p className="text-grey mb-5">{book.description || ""}</p>

                <div className="d-flex justify-content-start align-items-center mt-5 mb-2">
                  <h4 className="mb-0">Reading Plan</h4>
                  <FaPlus
                    size={22}
                    className="text-primary ms-2"
                    style={{ cursor: "pointer" }}
                    title="Add new chapter"
                    onClick={() => setModalIsOpen(true)}
                  />
                </div>

                <div className="d-flex fs-5 mt-3">
                  <span className="me-4">
                    <strong>Chapters:</strong>{" "}
                    <span className="text-primary">{chapterCount}</span>
                  </span>
                  <span className="ms-5">
                    <strong>Completed:</strong>{" "}
                    <span className="text-primary">{completedCount}</span>
                  </span>
                </div>
              </div>

              <div className="col-md-4 mt-4 text-center">
                <ContinueReadingCard
                  baseImage={book.image || "continuereading.png"}
                  title={book.title}
                  progress={progress}
                />
              </div>
            </div>
          </div>

          <div>
            {chapters.length === 0 && (
              <div className="text-center text-secondary py-4">
                No chapters yet. Click + to add your first chapter.
              </div>
            )}

            {chapters.map((ch) => (
              <div
                key={ch.id}
                className="row mx-0 py-3 align-items-center border-bottom border-secondary"
              >
                <div className="col-12 col-md-3 fw-bold mb-2 mb-md-0 d-flex align-items-center">
                  {ch.name}
                  <FaEdit
                    size={16}
                    className="text-primary ms-2"
                    style={{ cursor: "pointer" }}
                    title="Edit chapter"
                    onClick={() => handleEditClick(ch)}
                  />
                </div>

                <div className="col-12 col-md-3 text-light mb-2 mb-md-0">
                  {ch.description}
                </div>

                <div className="col-6 col-md-3 text-primary">{ch.date}</div>

                <div
                  className={`col-3 col-md-3 me-0 fw-bold ${
                    ch.status === "Completed" ? "text-success" : "text-warning"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleStatusClick(ch)}
                  title="Click to change status"
                >
                  {ch.status}
                </div>

              </div>
            ))}
          </div>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content bg-dark text-white p-4 rounded"
        overlayClassName="modal-overlay"
      >
        <h4 className="mb-3 text-center text-primary">Add New Chapter</h4>
        <form onSubmit={handleAddChapter}>
          <div className="mb-3">
            <label className="form-label">Chapter Name</label>
            <input
              type="text"
              name="name"
              value={newChapter.name}
              onChange={handleInputChange}
              className="form-control bg-dark text-white border-secondary"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={newChapter.description}
              onChange={handleInputChange}
              className="form-control bg-dark text-white border-secondary"
              rows="3"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              value={newChapter.date}
              onChange={handleInputChange}
              className="form-control bg-dark text-white border-secondary"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              name="status"
              value={newChapter.status}
              onChange={handleInputChange}
              className="form-select bg-dark text-white border-secondary"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Chapter
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={editModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        className="modal-content bg-dark text-white p-4 rounded"
        overlayClassName="modal-overlay"
      >
        <h4 className="mb-3 text-center text-info">Edit Chapter</h4>
        {editChapter && (
          <form onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <label className="form-label">Chapter Name</label>
              <input
                type="text"
                name="name"
                value={editChapter.name}
                onChange={handleEditChange}
                className="form-control bg-dark text-white border-secondary"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={editChapter.description}
                onChange={handleEditChange}
                className="form-control bg-dark text-white border-secondary"
                rows="3"
              />
            </div>
            <div className="d-flex justify-content-end gap-3 mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setEditModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-info">
                Save
              </button>
            </div>
          </form>
        )}
      </Modal>

      <Modal
        isOpen={statusModalOpen}
        onRequestClose={() => setStatusModalOpen(false)}
        className="modal-content bg-dark text-white p-4 rounded"
        overlayClassName="modal-overlay"
      >
        <h4 className="mb-3 text-center text-warning">Change Status</h4>
        {statusChapter && (
          <form onSubmit={handleStatusSubmit}>
            <div className="mb-3">
              <select
                value={statusChapter.status}
                onChange={handleStatusChange}
                className="form-select bg-dark text-white border-secondary"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="d-flex justify-content-end gap-3 mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setStatusModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-warning text-dark fw-bold">
                Update
              </button>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
};

export default BookPage;
