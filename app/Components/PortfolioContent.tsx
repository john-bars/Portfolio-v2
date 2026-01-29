import Image from "next/image";
import Link from "next/link";

const PortfolioContent = () => {
  const items = [
    {
      id: 1,
      name: "DevFlow",
      link: "https://devflow-bars.vercel.app/",
      image: {
        light: "/images/devflow_light.png",
        dark: "/images/devflow_dark.png",
      },
      description: "A Stack Overflow–inspired Q&A platform for developers.",
    },
    {
      id: 2,
      name: "Filmpire",
      link: "https://filmpire-bars.vercel.app/",
      image: {
        light: "/images/filmpire_light.png",
        dark: "/images/filmpire_dark.png",
      },
      description: "A movie discovery app powered by the TMDB API.",
    },
  ];
  return (
    <div className="gap-8 my-16 md:my-20 flex flex-col md:grid md:grid-cols-2   md:gap-10 lg:gap-12 lg:mt-24 mx-8 lg:mx-10 xl:mx-40 justify-center">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-[#dddddd] border rounded-xl p-4 w-full max-w-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={item.image.light}
              alt={item.name}
              fill
              loading="eager"
              sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/3" />
          </div>
          <div className="pt-4">
            <h4 className="text-primary text-lg mb-1">{item.name}</h4>
            <p className="text-secondary text-md line-clamp-1">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioContent;
