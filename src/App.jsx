import Favorite from "./components/Favorite";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar"
import { useContext } from "react";
import { appContext } from "./Context";



function App() {
  const {meals, favoritesFromLocal, error} = useContext(appContext);
  console.log(error);
  
  
  return (
    <div className="App">
      <Navbar/>
      if(error){
        <h4>{error}</h4>
      }
      {favoritesFromLocal.length === 0 || error ? "" : <Favorite/>}
      {meals && <Meals/>}
      
    </div>
  );
}

export default App;
