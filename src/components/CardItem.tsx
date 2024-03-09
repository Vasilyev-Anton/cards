import { Button } from "react-bootstrap"

interface Props {
    card : {
        title : string,
        image? : string,
    }
}

export default function CardItem ({card}:Props){           
    return (   
        <div className="card container-fluid">
            {card.image ? <img src={card.image}/> : ""}
            <h2 className="card__title text-start mt-1">Card Title</h2>
            <p className="text-start">{card.title}</p>
            <Button variant="primary col-md-6 mt-3">Go somewhere</Button>
        </div>  
    )
}
