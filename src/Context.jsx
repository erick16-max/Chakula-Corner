import { createContext, useEffect, useState } from "react";

const appContext = createContext();

const AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [mealSelected, setMealSelected] = useState([])
    const modalOuter = document.querySelector('.modal-outer');
    const favoriteButtons = document.querySelectorAll(".favorite")
    const modalInner = document.querySelector('.modal-inner');

    const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    const favoritesFromLocal = JSON.parse(localStorage.getItem("favorites"))



    const fetchMeals = async (url) => {
        try {
            setIsLoading(true)
            const response = await fetch(url);
            if(!response.ok){
                throw Error("Could Not Load Meals.")
            }
            const {meals} = await response.json();
            setMeals(meals);
            meals ? setIsLoading(false) : setIsLoading(true);
            //console.log(meals)
            
        } catch (error) {
            setError(error.message)
    }  
}


    useEffect(() => {
        fetchMeals(`${mealsUrl}${searchTerm}`)
    },[searchTerm])



    const handleRecipeButtonClick = (event) => {
        modalOuter.classList.add('open');
        const index = meals.findIndex(meal => meal.idMeal === event.currentTarget.id)
        setMealSelected(meals[index])
      }

    const addToFavorites =idMeal => {
        const mealExist = favorites.find(meal => meal.idMeal === idMeal)
        if(mealExist){
            const updatedFavorite = favorites.filter(meal => meal.idMeal !== idMeal)

            setFavorites(updatedFavorite)
            localStorage.setItem("favorites", JSON.stringify(updatedFavorite))
            favoriteButtons.forEach(btn => {
                if(btn.id === idMeal){
                    localStorage.setItem("favorites", JSON.stringify(updatedFavorite))
                    btn.classList.remove("add")
                }
            })
            
        }else{
            const mealToAdd = meals.find(meal => meal.idMeal === idMeal)
            mealToAdd['isFavourite'] = true
            const updatedFavorite = [...favorites, mealToAdd]
            setFavorites(updatedFavorite)
            localStorage.setItem("favorites", JSON.stringify(updatedFavorite))
            favoriteButtons.forEach(btn => {
                if(btn.id === idMeal){
                    btn.classList.add("add")
                }
            })
        }
    }

    return ( 
        <appContext.Provider value={
            {
                meals, setOpenModal, openModal,
                 modalOuter,handleRecipeButtonClick, 
                 mealSelected, setSearchTerm,error,
                 searchTerm, isLoading, setIsLoading, addToFavorites,favoritesFromLocal
                }
            }>
                {children}
        </appContext.Provider>
    );
}
 
export {appContext, AppProvider};