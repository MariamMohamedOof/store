// import { useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom';
// import Pro from './Pro';
// function Productdetails(){
//     const apiurl="https://fakestoreapi.com/products";
//     const [product, setProduct] = useState({});
//     const params= useParams();

//     useEffect(()=>{
//         fetch(`${apiurl}/${params.productid}`)
//         .then((res)=>res.json())
//         .then((product)=>setProduct(product));
//      },[]);

//     return( 
//         < Pro product={product} showButton />
//     // <>
//     // <h1>{params.productid} more details</h1>
//     // </>
//     );
// }
// export default Productdetails;