import { Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant='top' src={ prod.image } alt={ prod.name }/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> ${prod.price.split(".")[0]} </span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={ prod.ratings } />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
