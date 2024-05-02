// // const Buttonbtn = ()=>{
// //     return(
// //     <button>Submit</button>)
// // }

// import Listname from "../map"

// // export default Buttonbtn 
//  const ButtonComponent = ()=>{
//     const login = true
//     return(
//         <>
//         {
//             login
//             &&
//              <Listname></Listname> 
             
//         }
//         </>
//     )
//  }
   
    
//  export default ButtonComponent


const Btn = (props)=>{
    console.log(props,"props")
    // const text,bgcolor,buttonproperties:{width,height}}
    return(
        <>

        <button style={{backgroundColor:props.bgColor, 
        width:props.buttonproperties.width,
        height:props.buttonproperties.height}}> {props.text} </button>

        </>
    )
}
export default Btn