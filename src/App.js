
import './App.css';
import Btn from './Components/function components/button';
function App() {
  const buttonArray =[
    {text:"signUp",
    width:100,
    height:100,
    bgColor:"green"},
  
    {text:"login",
    width:100,
    height:100,
    bgColor:"blue"},

    {text:"submit",
    width:100,
    height:100,
    bgColor:"red"},

    {text:"onClick",
    width:100,
    height:100,
    bgColor:"orange"}
    
]
  return (
   <div>
    {
      buttonArray.map(eachbutton=>{
        const {text,width, height ,bgColor }=eachbutton
        return(
         <Btn text= {text} bgColor={bgColor} buttonproperties={
          {width:width,
          height:height}
         }/> 
        )
      })
    }
   {/* <Btn text = {"Login"} bgColor = {"blue"}  buttonproperties = {{
    width:100,
    height:100
   }}
  />
   <Btn text= {"Signup"} bgColor= {"orange"} buttonproperties = {{
    width:100,
    height:100
   }}/>
   <Btn text = {"submit"} bgColor= {"green"} buttonproperties = {{
    width:100,
    height:100
   }} /> */}

     </div>
     )}



export default App;
