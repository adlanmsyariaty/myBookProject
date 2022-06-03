import { Navbar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Navbar className="w-screen-xl mx-5">
      <div className="container flex justify-between items-center text-blue-grey-900">
        <Link
          to="/"
          as="a"
          variant="small"
          className="py-1.5 mr-4 font-bold cursor-pointer text-green-600"
        >
          MY BOOKS
        </Link>
        <Link to="/wishlist">
          <Button variant="gradient" size="sm" color="green">
            Book Wishlist
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}

export default Nav;
