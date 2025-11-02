import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Collections from "./components/Collections";
import CreateBook from "./components/CreateBook";
import BookPage from "./components/BookPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/bookpage" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
