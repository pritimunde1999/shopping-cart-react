import { removeFromCart,checkOut } from "../redux/actions/cartAction";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart = () =>{
    
   console.log("hiii");
     const cart = useSelector(state=>state.cart)
     const dispatch = useDispatch();
     
   
     function removeCart(id)
     {
         dispatch(removeFromCart(id))
         const notify = () =>{
            toast.success("Removed from cart")
        }

        notify();
     }

     function checkoutItems(){
        dispatch(checkOut());
        const notify = () =>{
         toast.success("Checked Out Successfully!")
     }

     notify();
     }
     
    
     return(
        <div>
           <h1>MY Cart</h1>
           <div className="cartContainer">
            <div className="cardContainerCart">
               {
                  cart && cart.map(item=>(
                   <div className="card" key={item.id}>
                   <img  src={item.thumbnail} width={280} height={350} />
                   <p className="title"><b>Title:</b> {item.title}</p>
                   <p><b>Price:</b> ${item.price}</p>
                   <button onClick={()=>removeCart(item.id)}>Remove From Cart</button>
                </div>
                  ))
               }
            </div>

            <div className="right">
                <div className="checkout">
                   <h3 className="heading">Checkout List</h3>
                   <ol>
                     {
                        cart && cart.map((item)=>(
                           
                           <li>
                              <div className="list">
                                <span className="text">{item.title}</span>
                                <span>${item.price}</span>
                              </div>
                           </li>
                        ))
                     }

                   </ol>
                   <hr/>
                     <div className="total">
                     <span><b>Total</b></span>
                     <span>$
                        {
                           cart ? cart.reduce((total,item)=> total+item.price,0) : 0
                        }
                     </span>
                     </div>
                   <hr/>
                   <button className="checkoutBtn" onClick={checkoutItems}>Click To Checkout</button>
                </div>
            </div>
             
           </div>
        </div>
     )
}

export default Cart;
