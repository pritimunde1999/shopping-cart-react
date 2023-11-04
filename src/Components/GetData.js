import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchGetSuccess,fetchGetFailure } from "../redux/actions/getFetchAction";
import { addToCart } from "../redux/actions/cartAction";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const GetData = () =>{
    const dispatch = useDispatch();
    const {data,error} = useSelector(state=>state.fetch)

    
    const notify = () =>{
        toast.success("Added To cart")
    }

    function addingInCart(item){
        dispatch(addToCart(item));
        notify();
    }

  
    
    useEffect(()=>{
       
        async function getData(){
            try{
                const list = await axios("https://dummyjson.com/products")
                dispatch(fetchGetSuccess(list.data.products));
            }
            catch(error){
                dispatch(fetchGetFailure(error.message))
            }
        }

        getData();

    },[dispatch])
     
    return(
       <div>
          <h1>All Items</h1>
         <div className="cardContainer">
        {   
            data && data.map(item=>(
                <div className="card" key={item.id}>
                   <img  src={item.thumbnail} width={280} height={350} />
                   <p className="title"><b>Title:</b> {item.title}</p>
                   <p><b>Price:</b> ${item.price}</p>
                   <button onClick={()=>addingInCart(item)}>Add To Cart</button>
                </div>
            ))
        }
        </div>
       </div>
     )
     
}

export default GetData;