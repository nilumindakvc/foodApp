import styles from "./ingredientslistelement.module.css"

export default function IngredientsListElement({item}){
    return(
        <div className={styles.elementcontainer}>
         
       <div className={styles.imagecontainer}>
        <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image}></img>
       </div>

       <div className={styles.name_amount_container}>
       <h2 className={styles.itemname}>{item.name}</h2>
       <h4 className={styles.itemamount}>{item.amount} {item.unit}</h4>
       </div>
            
        </div>
        
    );
}