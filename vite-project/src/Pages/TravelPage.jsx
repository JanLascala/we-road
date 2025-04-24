import { useParams } from "react-router-dom";
import Destinations from "../Data/Destinations.js";
import Clients from "../Data/Clients.js";
import Clientaccordion from "../Componets/Client_accordion.jsx";

export default function Traveldetailcard() {
    const { id } = useParams();
    const destination = Destinations.find(dest => dest.id === parseInt(id));




    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1>{destination.destination}</h1>
                    <p>{destination.description}</p>
                    <p>
                        <strong>Departure:</strong> {destination.departureDate}<br />
                        <strong>Return:</strong> {destination.returnDate}<br />
                        <strong>Participants:</strong> {destination.participants}
                    </p>
                </div>
                <div className="col-4">
                    <p>image goes here</p>
                </div>
            </div>
            <div className="accordion">
                {/* Accordion for client details */}
                <h2>Client Details</h2>
                {Clients.map(client => (
                    <Clientaccordion key={client.id} client={client} />))}


            </div>

        </div>
    );
}
