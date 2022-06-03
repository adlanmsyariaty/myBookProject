import { useEffect, useState } from "react";
import BookCard from "../components/Card";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

function Home() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");
  const [debouncedBook] = useDebounce(book, 1000);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${debouncedBook}&startIndex=0&maxResults=40&key=AIzaSyCImmNj-lVDLLQj81L8ZChr_sHwxfzsDC4`
        );
        setBooks(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    if (debouncedBook) {
      fetchBook();
    }
  }, [debouncedBook]);

  const findBook = (e) => {
    setBook(e.target.value);
  };

  return (
    <>
      <div className="min-h-[100vh] flex bg-[url('https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg')] bg-contain bg-center justify-center items-center">
        <div className="w-[30%] text-left">
          <label className="text-white font-bold">Find Your Book :</label>
          <div className="mt-3 w-[100%]">
            <input
              className="bg-green-50 rounded-md w-[100%] py-2 px-3 focus:outline-none"
              placeholder="Search Book"
              type="text"
              name="book"
              value={book}
              onChange={(e) => findBook(e)}
            />
          </div>
        </div>
      </div>
      {books.length > 0 && (
        <div className="flex p-5 flex-wrap justify-center items-center">
          {books.map((book) => (
            <BookCard key={book.id} title={book.volumeInfo.title} authors={book.volumeInfo.authors} averageRating={book.volumeInfo.averageRating} imageUrl={book.volumeInfo.imageLinks?.thumbnail}/>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
