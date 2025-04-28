import { Link } from "react-router-dom"
export default function TravelCards({ destination }) {

    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <Link className="card shadow h-100" to={`/Traveldetailcard/${destination.id}`}>
                    <div>
                        <img src={destination.img} alt={destination.destination} className="card-img-top city-img" />
                    </div>
                    <div className="card-body">
                        <h2 className="fw-bold">
                            {destination.destination}
                        </h2>
                        <div className="d-flex flex-column gap-1 mt-3">
                            <span className="d-block fw-bold">Departure: {destination.departureDate}</span>
                            <span className="d-block fw-bold">Return: {destination.returnDate}</span>
                            <span className="d-block fw-bold">Participants: {destination.participants}</span>
                            <span className="d-block fw-bold">Tour Leader: {destination.tourLeader}</span>

                        </div>
                        <p className="mt-4">{destination.description}</p>
                    </div>
                </Link>
            </div>
        </>
    )
};