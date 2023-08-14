import { useContext, useState } from 'react'
import { AppContext } from './../App'

const Cart = () => {

    const { cart, setCart } = useContext(AppContext)

    return (
        <div>
            {
                cart == [] ? <h1>Cart is empty</h1> : cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.tag}</h2>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Cart
