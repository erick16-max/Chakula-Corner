import { useContext, useEffect, useState } from "react";
import { appContext } from "../Context";

const Favorite = () => {
    const storedMeals = JSON.parse(localStorage.getItem("meals"))
    const favorites = storedMeals.filter(meal => meal.favorite === true)
    
    return ( 
        <div className="favorite-meals">
            <h4>Favorite meals</h4>
            <div className="favorites">
                {
                    favorites.map(favMeal => {
                        return(
                            <div className="favorite-card">
                                <img src={favMeal.strMealThumb} alt="" />
                            </div>
                        )
                    })

                }
            </div>
        </div>
     );
}
 
export default Favorite;