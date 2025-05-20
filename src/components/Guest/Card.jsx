export default function Card({ icon, title, description, showImage = false, imageUrl = "" }) {
  return (
    <div className={`rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md ${showImage ? 'col-span-2 flex flex-col md:flex-row items-center' : ''}`}>
      <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-6">
        <div className="bg-orange-100 text-green-500 p-2 rounded-xl text-xl w-fit">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {showImage && imageUrl && (
        <div className="mt-4 md:mt-0 md:ml-auto max-w-[300px]">
          <img src={imageUrl} alt={title} className="w-full object-contain" />
        </div>
      )}
    </div>
  );
}
 