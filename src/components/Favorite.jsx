import { useContext } from "react";
import { appContext } from "../Context";

const Favorite = () => {
    const {favoritesFromLocal:favorites} = useContext(appContext);
    console.log(favorites)
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