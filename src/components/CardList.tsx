import CardItem from "./CardItem"

interface Props {
    list : {
        title : string,
    }[]
}

export default function CardList ({list}:Props){
    return (  
        <div className="card__wrapper">
            <div className="card container-fluid">
            {list.map( (item, i) => {return (<CardItem card={item} key={i}/>)})}
            </div>
        </div> 
    )
}
