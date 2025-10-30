export default function ProductItem({
  title,
  price,
  discountPercentage,
  rating,
  brand,
  availabilityStatus,
  description,
  thumbnail,
  category,
}) {
  return (
    <li className="bg-white border border-gray-200  rounded-2xl overflow-hidden shadow-sm duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden p-[20px_0_0_0]">
        <div className="flex justify-center">
          <img
            src={thumbnail}
            alt={title}
            className=" w-[250px] h-[200px] object-contain"
          />
        </div>
        {discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            -{discountPercentage}%
          </span>
        )}
        <span className="absolute top-3 right-3 bg-gray-900/70 text-white text-[11px] px-2 py-0.5 rounded-md uppercase tracking-wide">
          {category}
        </span>
      </div>

      <div className="flex flex-col p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-1">{description}</p>

        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <span className="text-yellow-500 text-sm font-semibold flex items-center gap-1">
            {rating}
          </span>
        </div>

        <div className="flex justify-between text-xs text-gray-600 mb-3">
          <span className="font-medium">{brand}</span>
          <span
            className={`font-medium ${
              availabilityStatus === "In Stock"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {availabilityStatus}
          </span>
        </div>
      </div>
    </li>
  );
}
