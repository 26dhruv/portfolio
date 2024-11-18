export function Avatar({ src, alt }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}