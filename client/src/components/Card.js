import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

function BookCard({ book }) {
  return (
    <div className="m-5">
      <Card className="w-[300px] mt-6">
        <CardHeader
          color="blue"
          className="relative h-[280px] w-[210px] mx-[45px]"
        >
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt="img-blur-shadow"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody className="text-center h-[270px]">
          <Typography variant="h6" className="mb-2">
            {book.volumeInfo.title}
          </Typography>
          <Typography className="text-left font-bold">Authors :</Typography>
          <Typography className="text-left">
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown"}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="h5" className="text-yellow-400">
            <Rater
              rating={
                book.volumeInfo.averageRating
                  ? book.volumeInfo.averageRating
                  : 0
              }
              total={5}
              interactive={false}
              color="yellow"
            />
          </Typography>
          <Typography variant="small" color="grey" className="flex gap-1">
            <Button variant="gradient" size="sm" color="blue">
              Add to Wishlist
            </Button>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BookCard;
