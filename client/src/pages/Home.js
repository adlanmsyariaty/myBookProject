import { useEffect, useState } from "react";
import BookCard from "../components/Card";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

function Home() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");
  const [debouncedBook] = useDebounce(book, 1000);
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${debouncedBook}&startIndex=${page}&maxResults=40&key=AIzaSyCImmNj-lVDLLQj81L8ZChr_sHwxfzsDC4`
        );
        setTotalItems(response.data.totalItems);
        setBooks(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    if (debouncedBook) {
      fetchBook();
    }
  }, [debouncedBook, page]);

  const findBook = (e) => {
    setBook(e.target.value);
  };

  const pageIncrement = () => {
    if (page + 40 <= totalItems) {
      const tempPage = page;
      setPage(tempPage + 40);
    }
  };

  const pageDecrement = () => {
    if (page - 40 >= 0) {
      const tempPage = page;
      setPage(tempPage - 40);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-transparent to-[#222] absolute mt-[calc(100vh-270px)] h-60 w-[100%]" />
      <div className="min-h-[calc(100vh-30px)] flex bg-[url('https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg')] bg-contain bg-center justify-center items-center">
        <div className="w-[30%] text-left">
          <label className="text-white font-bold text-3xl">
            Find Your Book :
          </label>
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
        <div className="flex justify-between h-[50px] items-center mt-[20px] mx-10">
          <div className="bg-green-500 p-2 rounded-lg w-[120px] cursor-pointer flex flex-wrap items-center gap-2 justify-center">
            <div className="text-white items-center flex">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <p className="text-white font-bold" onClick={() => pageDecrement()}>
              Previous
            </p>
          </div>
          <div>
            <h1 className="text-green-400 text-4xl font-bold">BOOK LIST</h1>
          </div>
          <div className="bg-green-500 p-2 rounded-lg w-[120px] cursor-pointer flex flex-wrap items-center gap-2 justify-center">
            <p className="text-white font-bold" onClick={() => pageIncrement()}>
              Next
            </p>
            <div className="text-white items-center flex">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </div>
      )}

      {books.length > 0 && (
        <div className="flex p-5 flex-wrap justify-center items-center">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              averageRating={book.volumeInfo.averageRating}
              imageUrl={book.volumeInfo.imageLinks?.thumbnail}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
