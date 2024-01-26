import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = (props) => {
  const { title, price, description, image, rating } = props;
  const product = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card style={{ width: "18rem", padding: "1rem" }}>
      <div className="img-container">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price: ${price}
          <br />
          Rating: {rating.rate}
          <br />
          {description}
        </Card.Text>
      </Card.Body>
      <Button
        onClick={handleAddToCart}
        style={{ margin: "15px" }}
        variant="primary"
      >
        Add Product to Cart
      </Button>
    </Card>
  );
};

export default Product;
