export default function Clientaccordion({ client }) {
    return (

        <div className="accordion rounded" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header " id={`heading${client.id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${client.id}`} aria-expanded="true" aria-controls={`collapse${client.id}`}>
                        {client.firstName} {client.lastName}
                    </button>
                </h2>
                <div id={`collapse${client.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${client.id}`}>
                    <div className="accordion-body">
                        <p><strong>Codice Fiscale:</strong> {client.codiceFiscale}</p>
                        <p>
                            <strong>Phone:</strong> {client.phone}
                            <a
                                href={`tel:${client.phone}`}
                                className="call-btn"
                                title="Chiama"
                            >
                                <i className="bi bi-telephone"></i>
                                <span style={{ marginLeft: '4px' }}>Call</span>
                            </a>
                        </p>
                        <p><strong>Email:</strong> {client.email}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}