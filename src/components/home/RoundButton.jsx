export function RoundButton({ icon: Icon, link, alt }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="inline-block mx-2"
    >
      <button
        className="relative rounded-full overflow-hidden border-2 border-gray-300 
                     bg-white shadow-md h-14 w-14 flex items-center justify-center 
                     hover:bg-primary group transition-all duration-300"
      >
        <Icon className="h-6 w-6 text-gray-500 " />
      </button>
    </a>
  );
}
