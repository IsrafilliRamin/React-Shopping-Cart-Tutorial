import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai'
const Cart = () => {

  const {
    state: { cart },
    dispatch
  } = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  }, [cart])

  return (
    <div className='home'>
      <div className='productContainer' >
        <ListGroup>
          {cart.length > 0 ? (  <>
          {cart.map((prod, id) => (
            <ListGroup.Item key={id}>
              <Row className='row'>
                <Col lg={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={1}>{prod.price}</Col>
                <Col md={2} >
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={1} >
                  <Button>
                    <AiFillDelete
                      className='delete'
                      fontSize="20px"
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod
                      })}
                    />
                  </Button>
                </Col>

                <Col md={1}>
                  <Form.Control 
                 
                  onChange={(e) => dispatch({
                    type:"CHANGE_CART_QTY",
                    payload:{
                      id: prod.id,
                      qty: e.target.value
                    }
                    
                  })} 
                  as="select" value={Number(prod.qty)}
                 >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1} >{x + 1}</option>
                    )

                    )}
                  </Form.Control>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
          </>) : ( <div className='listEmpty'>List Empty</div> ) }
        
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='titel'>Subtotal ({cart.length}) item</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart