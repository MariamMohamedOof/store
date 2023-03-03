// import './Slider.css';


function Pro (props){
   // console.log(props);
    const {product}=props;

    return(

    <>
   <div  className="card p-3 h-100 w-100">
  <img src={product.image}
   className="card-img-top " alt={product.title}/>
  <div   className="card-body">
    <h5   className="card-title">{product.title}</h5>
    {/* <p   className="card-text"> {product.description} </p> */}
    {/* <a href="#" className="btn btn-primary">details</a> */}
  </div>
</div> 
    
    </>
    );
}
 export default Pro;