export default function Cards({ image, title, altText }) {
  return (
    <div className="relative h-28 w-full overflow-hidden bg-zinc-500 sm:h-36">
      <img
        src={image}
        alt={altText}
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/25" />
      <h3 className="absolute bottom-2 left-2 text-sm font-semibold text-white sm:text-base">
        {title}
      </h3>
    </div>
  );
}