import React from "react"
import CreateBookCard from "./UI/CreateBookCard";
const CreateBook = () => {
    return (
        <div>
            <CreateBookCard logo="logo-text.png" label1="Book Title" label2="Book Autor" label3="No. of Chapters" heading="Create a Book" btntext="Create Book" />
        </div>
    )
}
export default CreateBook;