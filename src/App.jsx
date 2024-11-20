
import { useState } from "react";
import Serch from "./components/Serch";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css"
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import FoodDetails from "./components/FoodDetails";

function App() {

  const [foods,setfoods]=useState([]);
  const [foodid,setfoodid]=useState(680975);

  return(
    <div>
      <Nav/>
      <Serch foods={foods} setfoods={setfoods}/>
      <Container>
        <Innercontainer>
        <Foodlist  setfoodid={setfoodid} foods={foods}/>
        </Innercontainer>
        <Innercontainer>
          <FoodDetails foodid={foodid}/>
        </Innercontainer>
      
      </Container>
      
    </div>
  );

}

export default App
