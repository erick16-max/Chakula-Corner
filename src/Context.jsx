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
    const storedMeals = JSON.parse(localStorage.getItem("meals"))



    const fetchMeals = async (url) => {
        try {
            setIsLoading(true)
            const response = await fetch(url);
            if(!response.ok){
                throw Error("Could Not Load Meals.")
            }
            const {meals} = await response.json();
            const updatedMeal =meals.map(meal => {
                meal["favorite"] = false;
                setMeals([...meals]);
            })
            
            
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
       const favoriteMeal = meals.find(meal => meal.idMeal === idMeal)
       if(favoriteMeal.favorite === false){
            favoriteMeal.favorite = true
            const updatedMeal = [...meals]
           
            localStorage.setItem("meals", JSON.stringify(updatedMeal))
            setMeals(updatedMeal)
            
       }else{
            favoriteMeal.favorite = false
            const updatedMeal = [...meals]
            console.log(updatedMeal)
            localStorage.setItem("meals", JSON.stringify(updatedMeal))
            setMeals(updatedMeal)
        
       }
       
        
    }

    return ( 
        <appContext.Provider value={
            {
                meals, setOpenModal, openModal,
                 modalOuter,handleRecipeButtonClick, 
                 mealSelected, setSearchTerm,error,
                 searchTerm, isLoading, setIsLoading, storedMeals, addToFavorites
                }
            }>
                {children}
        </appContext.Provider>
    );
}
 
export {appContext, AppProvider};