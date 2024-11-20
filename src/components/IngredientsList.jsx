import IngredientsListElement from "./IngredientsListElement";

export default function IngredientsList({food,isLoading}){
    return(
        <div>
            {isLoading?<p>Loding...</p>:food.extendedIngredients.map(item=><IngredientsListElement item={item}/>)}
             
        </div>
    );
}