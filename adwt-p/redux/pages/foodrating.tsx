import { useState } from "react"

type FoodItem = {
    id: number,
    name: string,
    rating: number
}
export default function FoodRating() {

    const [foods, setfoods] = useState<FoodItem[]>([
        { id: 1, name: '🍕 Pizza', rating: 0 },
        { id: 2, name: '🍔 Burger', rating: 0 },
        { id: 3, name: '🌮 Taco', rating: 0 },
        { id: 4, name: '🥗 Salad', rating: 0 }
    ])

    const updaterating=(id:number, newrating:number)=>{
        setfoods(pf=>{
            return pf.map(food=>{
                if(food.id===id){
                    return {...food, rating: newrating}
                }
                return food
            })
        })
    }

    const averagerating =foods.reduce((sum,foods)=>sum+foods.rating,0)/foods.length;
    const highestratedfood=foods.reduce((highest,current)=>current.rating>highest.rating?current:highest)
    const lowestratedfood=foods.reduce((lowest,current)=>current.rating<lowest.rating?current:lowest)
    const allratingzero=foods.every(food=>food.rating==0)
    const resetrating=()=>{
        setfoods(
            foods.map(food => ({ ...food, rating: 0 }))
        )
    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Food Rating</h2>
            {foods.map(food=>{
                return(
                <div key={food.id} style={{justifyContent:'space-around', display:'flex', margin:'20px 0'}}>
                    <span>{food.id}</span>
                    <span>{food.name}</span>
                    <span>{food.rating}</span>
                    <button onClick={()=>updaterating(food.id, 1)}>1</button>
                    <button onClick={()=>updaterating(food.id, 2)}>2</button>
                    <button onClick={()=>updaterating(food.id, 3)}>3</button>
                    <button onClick={()=>updaterating(food.id, 4)}>4</button>
                    <button onClick={()=>updaterating(food.id, 5)}>5</button>
                </div>
                )
            })}

            <h2 style={{textAlign: 'center'}}>Statistics</h2>
            <p style={{textAlign: 'center'}}>Average Rating: {averagerating.toFixed(2)}</p>
            <p style={{textAlign: 'center'}}>Highest Rated Food: {highestratedfood.name} ({highestratedfood.rating})</p>
           <p style={{textAlign: 'center'}}>Lowest Rated Food: {lowestratedfood.name} ({lowestratedfood.rating})</p>
           <button onClick={()=>resetrating()}>reset rating</button>

        </>
    )
}