import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="max-h-48">
        <Image
          src={image}
          alt="contain"
          width={500}
          height={500}
          objectFit="contain"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify max-h-24 line-clamp-3">{description}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn">Selengkapnya</button>
        </div>
      </div>
    </div>
  );
}
