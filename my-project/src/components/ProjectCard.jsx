// ProjectCard for portfolio website
// Displays project title, image, descriptions, and link to repository and live demo

import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, description }) {
  const smallerSentence = (text) => {
    if (!text) return "No description available";
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const twoSentences = sentences.slice(0, 2).join(" ");

    if (twoSentences.length > 100) {
      return twoSentences.slice(0, 100) + "...";
    }

    return twoSentences;
  };

  return (
    <div className="flex flex-col rounded-xl shadow-md transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer overflow-hidden w-full min-h-[420px] sm:min-h-[450px] md:min-h-[480px]">
      <div className="flex items-center justify-center w-full h-40 sm:h-48 md:h-56 overflow-hidden shrink-0">
        <img
          src={image || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={title}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
          }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-base md:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-xs sm:text-sm pb-3 pt-3 line-clamp-3">
          {smallerSentence(description)}
        </p>
      </div>
    </div>
  );
}
