
import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import {Dropdown, Navbar, Container, FormControl, Nav, Badge, Button } from 'react-bootstrap'
import {FaShoppingCart} from "react-icons/fa"
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {
    const  {
        state : {cart},
        dispatch,
        productDispatch,
    } = CartState()
    return (
        <Navbar bg="dark" variant='dark' style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }} placeholder="Search a product" className='m-auto'
                   
                    onChange={(e)=>productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value
                    })}
                    />
                </Navbar.Text>

                <Nav>
                    <Dropdown alignright={getValue.toString()}>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25"/>
                            <Badge>{cart.length}</Badge>
                           
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minwidth: 370 }}>
                        {cart.length > 0 ? (
                                <>
                                 {cart.map((prod)=>(
                                    <span key={prod.id} className='cartItem'>
                                        <img src={prod.image}
                                         alt="img" className='cartItemImg' />
                                         <div className='cartItemDetail'>
                                        <span>{prod.name}</span> <br />
                                        <span>{prod.price.split(".")[0]}</span>
                                         </div>
                                         <AiFillDelete
                                         className='delete'
                                         fontSize="20px"
                                         onClick={()=>dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload:prod
                                         })}
                                         />
                                    </span>
                                        ))}
                                        <Link to="/cart">
                                        <Button style={{width: "95",margin:"0 10px"}} >
                                            Go to Cart
                                        </Button>
                                        </Link>
                                </>
                               
                            ):( <span className='empty'>Cart is empty</span> )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>



            </Container>
        </Navbar>
    )
}

export default Header