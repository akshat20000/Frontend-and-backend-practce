import '../style/list.css'
export default function RenderingList(){
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const items= products.map(n=>
    <li className="list" key={n.id}>{n.title}</li>

)


    return(
        <>
        <ul>{items}</ul>
        
        </>
    )
}