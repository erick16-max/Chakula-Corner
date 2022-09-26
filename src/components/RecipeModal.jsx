import { appContext } from "../Context";
import { useContext, useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import {FaYoutube, FaBuffer} from "react-icons/fa";




const RecipeModal = ({closeModal}) => {
 
  const {mealSelected} = useContext(appContext)
  const ingredientsArray = []
  const measuresArray = []
  
  ingredientsArray.push(
      mealSelected.strIngredient1, mealSelected.strIngredient2, mealSelected.strIngredient3, mealSelected.strIngredient4,
      mealSelected.strIngredient5, mealSelected.strIngredient6, mealSelected.strIngredient7, mealSelected.strIngredient8,
      mealSelected.strIngredient9,mealSelected.strIngredient10, mealSelected.strIngredient11,
      mealSelected.strIngredient12, mealSelected.strIngredient13, mealSelected.strIngredient14, mealSelected.strIngredient15,
      mealSelected.strIngredient16, mealSelected.strIngredient17,mealSelected.strIngredient18, mealSelected.strIngredient19,
      mealSelected.strIngredient20)

  measuresArray.push(
    mealSelected.strMeasure1, mealSelected.strMeasure2, mealSelected.strMeasure3, mealSelected.strMeasure4,
    mealSelected.strMeasure5, mealSelected.strMeasure6, mealSelected.strMeasure7, mealSelected.strMeasure8,
    mealSelected.strMeasure9,mealSelected.strMeasure10, mealSelected.strMeasure11,mealSelected.strMeasure12,
    mealSelected.strMeasure13, mealSelected.strMeasure14, mealSelected.strMeasure15,mealSelected.strMeasure16,
    mealSelected.strMeasure17,mealSelected.strMeasure18, mealSelected.strMeasure19,mealSelected.strMeasure20)


 console.log(mealSelected)

    function handleCloseOuterModal(event) {
        const isOutside = !event.target.closest('.modal-inner');
        if (isOutside) {
          closeModal();
        }
      }
    
    return ( 
        <div className="modal-outer" onClick={handleCloseOuterModal}>
        <div className="modal-inner">
        <div className="close" onClick={closeModal}></div>
            <div className="recipe">
              <div className="recipe-header">
                <img src={mealSelected.strMealThumb} alt="" />
                <div className="recipe-header-info">
                    <p><b>Meal:</b> <span>{mealSelected.strMeal}</span></p>
                    <p><b>Type:</b> <span>{mealSelected.strCategory || "indigenous"} </span></p>
                    <p><b>Origin:</b> <span>{mealSelected.strArea || "indigenous"}</span></p>
                    <div className="recipe-icons">
                    <a href={mealSelected.strYoutube} target="_blank"><div className="youtube-icon"><FaYoutube/></div></a>
                    <a href={mealSelected.strYoutube} target="_blank"><div className="youtube-watch">Watch on <br/>Youtube</div></a>
                    </div>
                </div>
              </div>
              <div className="horizontal-line"></div>
              <div className="recipe-ingredients">
                  <h4>{mealSelected.strMeal} Meal Ingredients and Measures</h4>
                  {
                    ingredientsArray.map((ingredient, index) => {
                      if(ingredient !== "" && ingredient !== null && ingredient !== undefined) {
                        return(
                          <div key={index} className="recipe-ingredients-list">
                             <li key={index}><TiTick/> {ingredient} - {measuresArray[index]}</li>
                          </div>
                        )
                      }
                    })
                  }
              </div>
              <div className="horizontal-line"></div>
              <div className="recipe-instructions">
                <h4>Cooking instructions</h4>
                <p>{mealSelected.strInstructions}</p>
              </div>
            </div>
            
        </div>
        </div>
     );
}
 
export default RecipeModal;