interface CardProps {
  cardTitle: string;
  cardDetails: string;
  cardImage: string;
  slug: string;
}

import Link from "next/link";

const Card = ({ cardTitle, cardDetails, cardImage, slug }: CardProps) => {
  return (
    <div className="card bg-base-100 w-4/5 h-100 shadow-sm">
      <figure className="h-48 overflow-hidden w-full">
        <img
          src={cardImage}
          alt={cardTitle}
          className="w-full h-full object-cover px-6"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{cardTitle}</h3>
        <p>{cardDetails}</p>
        <div className="card-actions justify-end">
          <Link href={`/diseases/${slug}`}>
            <button type="button" className="btn btn-primary">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
