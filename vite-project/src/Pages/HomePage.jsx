import TravelCards from "../Componets/Travel_cards";
import Destinations from "../Data/Destinations";


export default function HomePage() {

    return (
        <>
            <div className="container p-3 mt-5">
                <div className="row row-cols-sm-1 row-cols-lg-3 g-4">
                    {
                        Destinations.map(destination =>
                            (<TravelCards key={destination.id} destination={destination} />))
                    }
                </div>
            </div>
        </>
    )
}