import CardMoments from "./CardsMoments";
import "./container-cards-moments.css";

interface CardMomentsData {
  title: string;
  image: string;
  description?: string;
  AvailabilityDate?: string;
}

interface ContainerCardsProps {
  items: CardMomentsData[];
}

export default function ContainerMomentsCards({ items }: ContainerCardsProps) {
  return (
    <div className="cards-container">
      {items.map((item, i) => (
        <CardMoments
          key={i}
          title={item.title}
          image={item.image}
          description={item.description}
          AvailabilityDate={item.AvailabilityDate}
        />
      ))}
    </div>
  );
}
