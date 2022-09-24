import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'
import './styles.css'
const Filter = () => {



 
    const {
        producState:{byFastDelivery,byRating,byStock,sort
        }
        , productDispatch
    } = CartState()

  return (

    <div className='filters'>
        <span className='title' > Filter Products</span>
        <span>
            <Form.Check
            className='check'
            inline
            label="Ascending"
            name="group1"
            type='radio'
            id={`inline-1`}
            onChange={()=>
            productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHight"
            })
            }
            checked={sort === "lowToHight" ? true : false}
            />
        </span>
        <span>
            <Form.Check
             className='check'
            inline
            label="Descending"
            name="group1"
            type='radio'
            id={`inline-2`}
            onChange={()=>
                productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToHight"
                })
                }
                checked={sort === "highToHight" ? true : false}
            />
        </span>
        <span>
            <Form.Check
             className='check'
            inline
            label="Include Out of Stock"
            name="group1"
            type='checkbox'
            id={`inline-3`}
            onChange={()=>
            productDispatch({
                type: "FILTER_BY_STOCK"
            })
            }
            checked={byStock}
            />
        </span>
        <span>
            <Form.Check
             className='check'
            inline
            label="Fast Delivery Only"
            name="group1"
            type='checkbox'
            id={`inline-4`}
            onChange={()=>
                productDispatch({
                    type: "FILTER_BY_DELIVERY"
                })
                }
                checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating 
             rating={byRating} 
             style={{cursor: "pointer"}} 
             onClick={(i)=>
            productDispatch({
                type:"FILTER_BY_RATING",
                payload:i+1
            })
            }
            
             />
        </span>
        <Button variant='light'
        onClick={()=>
        productDispatch({
            type: "CLEAR_FILTERS"
        })
        }
        >Clear Filters</Button>
    </div>
  )
}

export default Filter