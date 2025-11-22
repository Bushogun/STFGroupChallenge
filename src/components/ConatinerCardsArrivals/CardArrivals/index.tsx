import "./card-arrivals.css";

interface Hotspot {
  x: number;
  y: number;
}

interface CardProps {
  title: string;
  image: string;
  hotspots?: Hotspot[];
}

export default function CardArrivals({ title, image, hotspots = [] }: CardProps) {
  const handleBuy = () => {
    console.log(`Comprar: ${title}`);
  };

  const handleAddToCart = (spot: Hotspot) => {
    console.log(`Agregar al carrito desde hotspot:`, spot);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} className="card-image" alt={title} />

        {hotspots.map((spot, index) => (
          <div
            key={index}
            className="hotspot"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
            }}
            onClick={() => handleAddToCart(spot)}
          />
        ))}
      </div>

      <div className="card-body">
        <button className="buy-btn" onClick={handleBuy}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
