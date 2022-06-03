import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function BookCard({ title, authors, averageRating, imageUrl, page }) {
  async function addBook() {
    try {
      await axios.post("http://localhost:3001/books", {
        title,
        authors,
        averageRating,
        imageUrl,
      });
      await MySwal.fire({
        title: <strong>Success to add book</strong>,
        icon: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="m-5">
      <Card className="w-[300px] mt-6">
        <CardHeader
          color="blue"
          className="relative h-[280px] w-[210px] mx-[45px]"
        >
          <img
            src={imageUrl ? imageUrl : ""}
            alt="img-blur-shadow"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody className="text-center h-[270px]">
          <Typography variant="h6" className="mb-2">
            {title}
          </Typography>
          <Typography className="text-left font-bold">Authors :</Typography>
          <Typography className="text-left">
            {authors
              ? authors.join(", ").length > 150
                ? authors.join(", ").slice(0, 150)
                : authors.join(", ")
              : "Unknown"}
            {authors ? (authors.join(", ").length > 150 ? "..." : "") : ""}
          </Typography>
        </CardBody>
        <CardFooter divider className={`flex items-center py-3 ` + (page === "wishlist" ? 'justify-center' : 'justify-between')}>
          <Typography variant="h5" className="text-yellow-400">
            <Rater
              rating={averageRating ? averageRating : 0}
              total={5}
              interactive={false}
            />
          </Typography>
          <Typography variant="small" color="grey" className="flex gap-1">
            {page !== "wishlist" && (
              <Button
                variant="gradient"
                size="sm"
                color="blue"
                onClick={() => addBook()}
              >
                Add to Wishlist
              </Button>
            )}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BookCard;
