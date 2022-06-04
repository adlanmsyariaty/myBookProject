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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actions/bookAction";

const MySwal = withReactContent(Swal);

function BookCard({ title, authors, averageRating, imageUrl, page }) {
  const dispatch = useDispatch();

  async function saveBook() {
    dispatch(addBook({ title, authors, averageRating, imageUrl })).then(() => {
      MySwal.fire({
        title: <strong>Success to add book</strong>,
        icon: "success",
      });
    });
  }

  return (
    <div className="m-5">
      <Card className="w-[260px] mt-6">
        <CardHeader
          color="blue"
          className="relative h-[280px] w-[180px] mx-[40px]"
        >
          <img
            src={imageUrl ? imageUrl : ""}
            alt="img-blur-shadow"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody className="text-center h-[270px]">
          <Typography variant="h6" className="mb-2">
            {title.slice(0, 100)}
            {title.length > 100 ? "..." : ""}
          </Typography>
          <Typography className="text-left font-bold">Authors :</Typography>
          <Typography className="text-left">
            {authors
              ? authors.join(", ").length > 140
                ? authors.join(", ").slice(0, 140)
                : authors.join(", ")
              : "Unknown"}
            {authors ? (authors.join(", ").length > 150 ? "..." : "") : ""}
          </Typography>
        </CardBody>
        <CardFooter
          divider
          className={
            `flex items-center py-3 ` +
            (page === "wishlist" ? "justify-center" : "justify-between")
          }
        >
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
                onClick={() => saveBook()}
              >
                Wishlist
              </Button>
            )}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BookCard;
