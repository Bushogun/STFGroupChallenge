import "./cards-moments.css";

interface CardProps {
    title: string;
    image: string;
    description?: string;
    AvailabilityDate?: string;
}

export default function CardArrivals({ title, image, description, AvailabilityDate }: CardProps) {

    const today = new Date();
    const availableDate = AvailabilityDate ? new Date(AvailabilityDate) : null;

    const isAvailable = availableDate ? availableDate <= today : false;

    const formattedDate = availableDate
        ? availableDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        : "Unavailable";

    return (
        <div className={`card ${!isAvailable ? "card-no-events" : ""}`}>
            <div className="card-image-container">

                <img
                    src={image}
                    className={`card-image ${!isAvailable ? "img-disabled" : ""}`}
                    alt={title}
                />

                <button className="card-button">
                    {isAvailable ? "Show More" : `${formattedDate}`}
                </button>
            </div>

            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                {description && <p className="card-description">{description}</p>}
            </div>
        </div>
    );
}
