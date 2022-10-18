import Favorite from "./components/Favorite";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar"
import { useContext } from "react";
import { appContext } from "./Context";





function App() {
  const {meals, favoritesFromLocal, error} = useContext(appContext);
  //console.log(JSON.parse(localStorage.getItem("meals")))
 
  
  
  return (
    <div className="App">
      <Navbar/>
      if(error){
        <h4>{error}</h4>
      }
      {<Favorite/>}
      {meals && <Meals/>}

    
    </div>
  );
}

export default App;
