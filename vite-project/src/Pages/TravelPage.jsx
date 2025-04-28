import { useParams } from "react-router-dom";
import Destinations from "../Data/Destinations.js";
import Clients from "../Data/Clients.js";
import Clientaccordion from "../Componets/Client_accordion.jsx";
import { useState } from "react";

export default function Traveldetailcard() {
    const { id } = useParams();
    const destination = Destinations.find(dest => dest.id === parseInt(id));
    const [searchWord, setSearchword] = useState('');

    const travellers = Clients.filter(client => destination.participants_id.includes(client.id))


    const filteredClients = travellers.filter(client =>
        (client.firstName && client.firstName.toLowerCase().includes(searchWord.toLowerCase())) ||
        (client.lastName && client.lastName.toLowerCase().includes(searchWord.toLowerCase()))
    );


    return (
        <div className="container p-4">
            <div className="p-3 my-5 bg-light rounded-3 shadow-lg">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <h1 className="fw-bold">{destination.destination}</h1>
                        <p>{destination.description}</p>
                        <p>
                            <strong>Departure:</strong> {destination.departureDate}<br />
                            <strong>Return:</strong> {destination.returnDate}<br />
                            <strong>Participants:</strong> {destination.participants}<br />
                            <strong>Tour Leader:</strong> {destination.tourLeader}
                        </p>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <img src={destination.img} alt={destination.destination} className="img-fluid shadow-sm" />
                    </div>
                </div>
            </div>

            <div className="p-4 my-2 bg-light rounded-3 shadow">

                <div className="accordion">
                    {/* Accordion for client details */}
                    <h2 className="mb-4 mt-3">Client Details</h2>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search clients..."
                        value={searchWord}
                        onChange={(e) => setSearchword(e.target.value)}
                    />


                    {filteredClients.map(client => (
                        <Clientaccordion key={client.id} client={client} />))}


                </div>

            </div>


        </div>
    );
}
