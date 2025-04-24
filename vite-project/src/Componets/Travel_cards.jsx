import { Link } from "react-router-dom"
export default function TravelCards({ destination }) {

    return (
        <>
            <div className="col-3">
                <Link className="card" to='/Travel_detail_card'>
                    <div className="card-header">
                        <p>IMG HERE</p>
                    </div>
                    <div className="card-body">
                        <h2>
                            {destination.destination}
                        </h2>
                        <ul>
                            <li><span>Departure: {destination.departureDate}</span></li>
                            <li><span>Return: {destination.returnDate}</span></li>
                            <li>Participants: {destination.participants}</li>
                        </ul>
                        <p>{destination.description}</p>
                    </div>
                </Link>
            </div>
        </>
    )
};