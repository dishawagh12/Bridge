import React from "react";

interface CardProps {
  title: string;
  name: string;
  description: string;
  imageUrl: string;
}

const SingleCard: React.FC<CardProps> = ({ title, name, description, imageUrl }) => (
  <a href="#" className="group relative block bg-black rounded overflow-hidden shadow-lg">
    <img
      alt=""
      src={imageUrl}
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div className="relative w-56 lg:w-64 lg:w-72 p-4">
      <p className="text-xs font-medium tracking-wide text-pink-400 uppercase">{title}</p>
      <p className="text-lg font-semibold text-white sm:text-xl">{name}</p>

      <div className="mt-4 sm:mt-12 lg:mt-14">
        <div className="translate-y-6 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs text-white leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </a>
);

const Card: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Auto Quiz Generator",
      name: "From Topic to Test",
      description:
        "Upload any topic or PowerPoint and instantly generate relevant, challenging quizzes. Let AI do the hard work so educators can focus on teaching.",
      imageUrl: "/trian.webp",
    },
    {
      title: "Smart Quiz Insights",
      name: "Analyze & Adapt",
      description:
        "Get detailed performance insights on each quiz attempt. Understand student strengths, weaknesses, and adapt teaching accordingly.",
      imageUrl: "/square.jpg",
    },
    {
      title: "Collaborative Learning",
      name: "Engage Together",
      description:
        "Bridge makes learning interactive by enabling students to participate in quizzes together, fostering collaboration and discussion.",
      imageUrl: "/circle.webp",
    },
  ];

  return (
    <div className="px-10 sm:px-20 lg:px-32 xl:px-48 2xl:px-60 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:bg-gray-900 justify-items-center">
      {cards.map((card, index) => (
        <SingleCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Card;
