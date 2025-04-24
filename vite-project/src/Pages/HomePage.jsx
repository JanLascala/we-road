import TravelCards from "../Componets/Travel_cards";
import Destinations from "../Data/Destinations";


export default function HomePage() {

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        Destinations.map(destination => (<TravelCards key={destination.id} destination={destination} />))
                    }
                </div>
            </div>
        </>
    )
}