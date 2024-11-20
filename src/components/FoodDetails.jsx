import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css"
import IngredientsList from "./IngredientsList";

export default function FoodDetails({foodid}){
    const URL=`https://api.spoonacular.com/recipes/${foodid}/information`;
    const API_KEY="42fc1b436bfa4520807c303bbcfad4a1";

    const [food,setFood]=useState({});
    const [isLoading,setLoding]=useState(true);

    useEffect(()=>
        {
            async function fetchfood(){
                const res=await fetch(`${URL}?apiKey=${API_KEY}`);
                const data=await res.json();
                setFood(data)
                setLoding(false)
                console.log(data);

            }
            fetchfood()
            
        },[foodid])

    return(
        <div className={styles.detailscontainer}>
            
            {/*food details:{foodid}*/}
            <div className={styles.itemname}>
            <h4>{food.title}</h4>
            </div>
           
            
            <img className={styles.itemimage} src={food.image} alt="rec"></img>
            <div className={styles.shortinfo}>
                <span>💰&nbsp;${(food.pricePerServing/100).toFixed(2)}</span>
                <span>🕛&nbsp;&nbsp;{food.readyInMinutes}Min</span>
                <span>{food.vegetarian?"🥕  vegetarian":"🍗  non-vegetarian"}</span>
                <span>🍴&nbsp;&nbsp;{food.servings}</span>
           
            </div>
            <hr></hr>
            <div>
                <h3>Ingredients</h3>
                <IngredientsList food={food} isLoading={isLoading}/>
            </div>
            <div>
                <h1>steps</h1>
                <ol>
                {isLoading?(<h3>Loading......</h3>):(food.analyzedInstructions[0].steps.map(step=><li className={styles.listelement}>{step.step}</li>))}
                </ol>
                
            </div>
        </div>
    );
}