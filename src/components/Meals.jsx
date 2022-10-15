import MealsContainer from "./MealsContainer";
import { appContext } from "../Context";
import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";





const Meals = () => {

    const {isLoading, meals,setIsLoading} = useContext(appContext);
    if(meals === null){
        setIsLoading(false)
        return(<h3 style={{marginTop:"150px", marginLeft:"550px"}}>Meal Not Found, Please Try Again</h3>)
    }else
    if(!navigator.onLine){
        setIsLoading(false)
        return(<h3 style={{marginTop:"150px", marginLeft:"550px"}}>You are not connected to the internet</h3>)
     
    }else{
    

    return ( 
        isLoading ? 
        <div  className="loader" >
            <ClipLoader
                color="tomato"
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <h3>Loading...</h3>
        </div>
        :  <MealsContainer/>
    
                    );
    }
    
    }
export default Meals;