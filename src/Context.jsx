import { createContext, useEffect, useState } from "react";

const appContext = createContext();

const AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [mealSelected, setMealSelected] = useState([])
    const modalOuter = document.querySelector('.modal-outer');
    const modalInner = document.querySelector('.modal-inner');

    const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"



    const fetchMeals = async (url) => {
        try {
            const response = await fetch(url);
            const {meals} = await response.json();
            setMeals(meals);
            //console.log(meals)
            
        } catch (error) {
            console.log(error.message);
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

    return ( 
        <appContext.Provider value={{meals, setOpenModal, openModal, modalOuter,handleRecipeButtonClick, mealSelected, setSearchTerm}}>
            {children}
        </appContext.Provider>
    );
}
 
export {appContext, AppProvider};