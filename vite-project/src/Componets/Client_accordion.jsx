export default function Clientaccordion({ client }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${client.id}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${client.id}`} aria-expanded="true" aria-controls={`collapse${client.id}`}>
                    {client.firstName} {client.lastName}
                </button>
            </h2>
            <div id={`collapse${client.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${client.id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p><strong>Codice Fiscale:</strong> {client.codiceFiscale}</p>
                    <p><strong>Phone:</strong> {client.phone}<i class="bi bi-telephone"></i>Call</p>
                    <p><strong>Email:</strong> {client.email}</p>
                </div>
            </div>
        </div>
    );
}