import { appContext } from "../Context";

import { useContext} from "react";
import {FaEye} from "react-icons/fa"
import RecipeModal from "./RecipeModal";



const Meals = () => {

    const {meals, modalOuter, handleRecipeButtonClick} = useContext(appContext)
    
    
   
    
      function closeModal() {
        modalOuter.classList.remove('open');
      }

      
    const recipeButtons = document.querySelectorAll('.recipeButton');
    recipeButtons.forEach(button => button.addEventListener('click', handleRecipeButtonClick))

    return ( 
        <div className="meals-container">
           { 
                meals.map(meal => {
                        return(
                            <div className="card" key={meal.idMeal} id={meal.idMeal}>
                            <img src={meal.strMealThumb} alt="" />
                                <div className="food-info">
                                    <p>
                                        <b>{meal.strMeal}</b>
                                        <br/><span>{meal.strTags || meal.strCategory}</span>
                                    </p>
                                    <div style={{marginTop:"10px", width:"120px"}}>
                                        <button id={meal.idMeal} className="recipeButton" onClick={handleRecipeButtonClick}>
                                            View Recipe <span className="eye"><FaEye/></span>
                                        </button>
                                        
                                    </div>
                                    <div className="favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.3 80.6"><path d="M86.2 7c-9.4-9.4-24.6-9.4-33.9 0l-5.7 5.7L41 7C31.6-2.3 16.4-2.3 7 7c-9.3 9.4-9.3 24.6 0 34l5.7 5.7 33.9 33.9 33.9-33.9 5.7-5.7c9.4-9.4 9.4-24.6 0-34z"/></svg>
                                    </div>
                                </div>
                            </div>
                            
                            )
                           
                        })

                        
                    }
                   
                   <RecipeModal closeModal={closeModal} />
        </div>
      
                    );
}
 
export default Meals;