import {useEffect, useState} from "react";
import Pro from './Pro';

function Products(){
    const apiurl="https://fakestoreapi.com/products";
    const [products, setProducts]=useState([]);
    useEffect(()=>{
       fetch(apiurl)
       .then((res)=>res.json())
       .then((data)=>setProducts(data));
    },[])
    return(
<>
<h2 className='text-center p-5'> Our Products</h2>
<div className="container">
<div className='row'>
    {products.map((product)=>{
        return(
           <div className='col-3' key={product.id}>
            <Pro product={product}/>
    </div> 
        );
    })}   




</div>
</div>
</>
    );

}
export default Products;