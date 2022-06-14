import {
    Badge,
    Navbar,
    Container,
    FormControl,
    Dropdown,
    Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
    const {
        state: {cart},
        dispatch
      } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl
                    style={{ width: 500 }}
                    placeholder="Search a product"
                    className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown style={{alignRight: true}}>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg='none'>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ mindWidth: 370 }}>
                        { cart.length > 0 ?
                            (
                                <>
                                   {cart.map((prod) => (
                                    <span className="cartItem" key={prod.id}>
                                        <img
                                            src={prod.image}
                                            className="cartItemImage"
                                            alt={prod.name}
                                        />
                                        <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span> ${prod.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                })
                                            }
                                        />
                                    </span>
                                   ))}
                                </>
                            )
                            :
                            (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )
                        }

                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;
