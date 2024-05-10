
  export const ProductCard = (props)=>{
   const {src,price,title,rating , brand} = props
    return(
        <div style={
            {
              display:"flex",
               flexDirection:"column",
               justifyContent:"center",
               alignItems:"center",
               backgroundColor:"white",
               margin:"15px",
               height:'48vh',
            padding:"20px",
            width:'15%',
            borderRadius:"10px"
            }
        }>

        <img style={
                {
                    borderRadius:"10px"
                }
            }  src={src} alt="" height={200} width={200}/>
        <h6>{title}</h6>
        <h5>${price}</h5>
        <h5>Rating: {rating}</h5>
        <p>Brand:{brand} </p>

        </div> 
    )
}
