import axios from "axios"
import { useEffect, useState } from "react";
import BookCard from "../components/Card";

function Wishlist() {
  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    async function fetchBookWishlist() {
      try {
        const response = await axios.get("https://my-book-project.herokuapp.com/books")
        setSavedBooks(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBookWishlist()
  }, [])

  return (
    <>
      <h1 className="pt-[100px] text-3xl text-white mb-[30px] font-bold">BOOK WISHLIST</h1>
      <div className="flex flex-wrap justify-center items-center">
        {savedBooks.length > 0 && savedBooks.map((book) => (
          <BookCard key={book._id} title={book.title} authors={book.authors} averageRating={book.rating} imageUrl={book.imageUrl} page="wishlist"/>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
