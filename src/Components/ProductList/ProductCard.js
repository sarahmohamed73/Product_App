import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slices/CartSlice'

function ProductCard ({product, navigateDetail, navigateCart}) {
  const dispatch = useDispatch()
  const handleButtonClick = (event) => {
    event.stopPropagation();
    dispatch(addToCart({...product,quantity:1}))
    navigateCart(product.id);
  };
  return (
    <Card style={{ width: '18rem' }} className="border border-0 text-start" onClick={() => navigateDetail(product.id)}>
      <div className="position-relarive">
        <Card.Img variant="top" src={product.thumbnail} style={{height: '200px'}} />
        {product.stock == 0 ? 
        <span className="badge bg-danger ms-2 position-absolute top-0 start-0 my-2">Out Of Stock</span> :
        <span className="badge bg-success ms-2 position-absolute top-0 start-0 my-2">In Stock</span>
      }
      </div>
      <Card.Body>
        <Card.Title className="row justify-content-between ">
          <Card.Title className="col">{product.title.substr(0, 10)}</Card.Title>
          <Card.Text className="col text-end"><sup>$</sup>{product.price}<sup>.00</sup></Card.Text>
        </Card.Title>
        <Card.Text >{product.description.substr(0, 27)}...</Card.Text>
        <Card.Text className="text-success"><StarRating rating={product.rating} /></Card.Text>
        <Button variant="btn btn-outline-success rounded-5 px-4" onClick={handleButtonClick}>Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard