
const Cart = ({addToCart}) =>{
     return(
        <div>
           <h1>MY Cart</h1>
           <div className="cartContainer">
            <div className="left">
               {
                  addToCart && addToCart.map(item=>(
                   <div className="card" key={item.id}>
                   <img  src={item.thumbnail} width={280} height={350} />
                   <p className="title"><b>Title:</b> {item.title}</p>
                   <p><b>Price:</b> ${item.price}</p>
                   <button>Remove From Cart</button>
                </div>
                  ))
               }
            </div>

            <div className="right">
                <div>
                   <h3>Checkout List</h3>
                </div>
            </div>
             
           </div>
        </div>
     )
}

export default Cart;
