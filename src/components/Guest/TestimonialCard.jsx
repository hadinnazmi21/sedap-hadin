export default function TestimonialCard({ avatar, name, position, review, rating }) {
  return (
    <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition w-full md:w-[48%]">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
          <div className="text-yellow-500 mt-1">⭐ {rating.toFixed(1)}</div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{review}</p>
    </div>
  );
}
