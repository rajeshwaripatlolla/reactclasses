ww// import logo from './logo.svg';
import './App.css';
import Carditem from './Components/card';
import Forms from './Components/form';
import ListItem from "./Components/function components/list"
// import Buttonbtn from "./Components/function components/button"
import Tablename from './Components/function components/table';


function App() {
  return (
    <div className="App">
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      
      <Tablename/>
      <Forms/> 
      <Carditem/>
    

    </div>
  );
}


export default App;
