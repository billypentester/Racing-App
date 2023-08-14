import { CardElement, useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react'
import axios from 'axios'
import { AppContext } from './../App'
import JSZip from 'jszip';

const Cart = () => {

    const { cart, setCart } = useContext(AppContext)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        if (!stripe || !elements) {
          return;
        }
    
        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
        });
    
        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100,
                    id: id
                })
    
                if(response.data.success) {
                    alert("Successful payment")
                    // download the images in zip
                    const zip = new JSZip();
                    const img = zip.folder("images");
                    cart.forEach((item, index) => {
                        const imgData = item.image.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
                        img.file(`${item.tag}.png`, imgData, {base64: true});
                    })
                    zip.generateAsync({type:"blob"})
                    .then(function(content) {
                        saveAs(content, "images.zip");
                    });
                    
                    setCart([])
                }
    
            } catch (error) {
                console.log("Error", error)
            }
        } 
        else {
            console.log(error.message)
            alert(error.message)
        }

    };

    const EmptyCart = () => {
        return (
            <div className="p-5">
                <div className='flex flex-1 flex-col items-center bg-neutral-200 shadow-xl rounded-md py-10' >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-wallet-4790943-3989296.png" alt="Empty Cart" className='w-1/4' />
                    <div className='text-center'>
                        <h1 className='text-4xl'>Your cart is empty</h1>
                        <h2 className='text-2xl'>Please add some items to your cart</h2>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                cart && cart.length == 0 && <EmptyCart/> 
            }
            {
                cart && cart.length > 0 &&
                <div className="container mx-auto p-10 my-5 bg-neutral-200 rounded-md shadow-lg">
                    <h1 className='text-4xl font-bold mb-5'>Cart</h1>
                    <div className='flex flex-1 flex-row justify-around'>
                        <div className="overflow-x-auto w-2/4">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Pic</th>
                                    <th>Tag</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                {
                                    cart && cart.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>
                                                    <img src={item.image} alt={item.tag} className='w-36 rounded-md' />
                                                </td>
                                                <td>{item.tag}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price * item.quantity}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                                </tbody>
                            </table>
                        </div>
                        <div className='w-1/4'>
                            <div className='flex flex-1 flex-col'>
                                <div className='flex flex-1 flex-row justify-between border border-b-slate-800 pb-3'>
                                    <h1 className='text-2xl font-bold'>Subtotal:</h1>
                                    <h1 className='text-2xl font-bold'>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h1>
                                </div>
                                <form onSubmit={handleSubmit} className='my-10'>
                                    <CardElement options={{hidePostalCode: true, style: {base: {fontSize: '18px'}}, iconStyle: 'solid'}} />
                                        <button className="btn btn-primary btn-md my-10 w-full" type="submit">Pay</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )

}

export default Cart
