import Fooditem from "./Fooditem";

export default function Foodlist({foods,setfoodid}){
    return(
        <div>
            {foods.map(item=><Fooditem  setfoodid={setfoodid} key={item.id} item={item} />)}
        </div>
    );
}
