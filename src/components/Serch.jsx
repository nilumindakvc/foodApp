import { useEffect, useState } from "react";
import styles from "./serch.module.css";

const URL='https://api.spoonacular.com/recipes/complexSearch'
const API_KEY='42fc1b436bfa4520807c303bbcfad4a1'

export default function Serch({foods,setfoods}){

    const [quary,setQuary]=useState("pizza");

    useEffect(()=>{async function fetchfood(){
        
        const res=await fetch(`${URL}?query=${quary}&apiKey=${API_KEY}`);
        const data=await res.json();
        //console.log(data.results);
        setfoods(data.results);
    }
    fetchfood();
    },[quary])

    return(
        <div className={styles.inputcontainer}>
            <input  className={styles.input} type="text" value={quary} onChange={(e)=>setQuary(e.target.value)} />
        </div>
    );
}