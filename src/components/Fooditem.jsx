import styles from "./fooditem.module.css"

export default function Fooditem({item,setfoodid}){
    
    return<div className={styles.itemcontainer}>

        
        <img className={styles.itemimage} src={item.image}/>
        <div className={styles.itemcontent}>
        <p className={styles.itemname}>{item.title}</p>
        </div>
        
        <div className={styles.buttoncontainer}>
        <button onClick={()=>setfoodid(item.id)} className={styles.button}>View Recipe</button>
        </div>
        

    </div>
}